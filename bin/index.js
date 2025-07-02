#!/usr/bin/env node

const { Command } = require('commander');
const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const inquirer = require('inquirer');
const ora = require('ora');

const program = new Command();
const packageJson = require('../package.json');

program
  .name('osjkit')
  .description('A template generator for React/Vite web and desktop applications')
  .version(packageJson.version);

// Add version command
program
  .option('-V, --version', 'output the version number')
  .action((options) => {
    if (options.version) {
      console.log(packageJson.version);
      process.exit(0);
    }
  });

program
  .argument('<app-name>', 'Name of the application')
  .option('--web', 'Create a web application')
  .option('--desktop', 'Create a desktop application')
  .option('--typescript', 'Use TypeScript instead of JavaScript')
  .action(async (appName, options) => {
    try {
      validateAppName(appName);
      await createApp(appName, options);
    } catch (error) {
      console.error(chalk.red('❌ Error: ') + error.message);
      process.exit(1);
    }
  });

function validateAppName(appName) {
  // Check if name is provided
  if (!appName || appName.trim() === '') {
    throw new Error('Application name is required');
  }

  // Validate name format
  if (!/^[a-zA-Z0-9][a-zA-Z0-9-_]*$/.test(appName)) {
    throw new Error('Application name must start with a letter or number and can only contain letters, numbers, hyphens, and underscores');
  }

  // Check for reserved names
  const reservedNames = ['node_modules', 'npm', 'yarn', 'package', 'package.json', 'src', 'dist', 'build'];
  if (reservedNames.includes(appName.toLowerCase())) {
    throw new Error(`"${appName}" is a reserved name. Please choose a different name`);
  }

  // Check if directory already exists
  const targetDir = path.resolve(process.cwd(), appName);
  if (fs.pathExistsSync(targetDir)) {
    throw new Error(`Directory "${appName}" already exists. Please choose a different name or remove the existing directory`);
  }

  // Check name length
  if (appName.length > 214) {
    throw new Error('Application name is too long (maximum 214 characters)');
  }

  // Check for npm naming conventions
  if (appName.startsWith('.') || appName.startsWith('_')) {
    throw new Error('Application name cannot start with a dot or underscore');
  }
}

async function createApp(appName, options) {
  console.log(chalk.blue('🚀 OSJKit - React Template Generator\n'));

  // Determine app type
  let appType = '';
  if (options.web && options.desktop) {
    throw new Error('Please specify either --web or --desktop, not both');
  } else if (options.web) {
    appType = 'web';
  } else if (options.desktop) {
    appType = 'desktop';
  } else {
    // Prompt user to choose
    const answers = await inquirer.prompt([
      {
        type: 'list',
        name: 'type',
        message: 'What type of application do you want to create?',
        choices: [
          { name: '🌐 Web Application (React + Vite)', value: 'web' },
          { name: '🖥️  Desktop Application (React + Vite + Tauri)', value: 'desktop' }
        ]
      }
    ]);
    appType = answers.type;
  }

  const useTypeScript = options.typescript || false;
  const targetDir = path.resolve(process.cwd(), appName);

  console.log(chalk.green('📋 Project Configuration:'));
  console.log(`   ${chalk.cyan('Name:')} ${appName}`);
  console.log(`   ${chalk.cyan('Type:')} ${appType === 'web' ? 'Web Application' : 'Desktop Application'}`);
  console.log(`   ${chalk.cyan('Language:')} ${useTypeScript ? 'TypeScript' : 'JavaScript'}`);
  console.log(`   ${chalk.cyan('Location:')} ${targetDir}\n`);

  // Create application
  const spinner = ora('Creating application structure...').start();
  
  try {
    // Create directory
    await fs.ensureDir(targetDir);
    spinner.text = 'Copying template files...';

    // Copy template files
    const templateDir = path.join(__dirname, '..', 'templates', appType);
    await copyTemplate(templateDir, targetDir, appName, useTypeScript);

    spinner.text = 'Installing dependencies...';
    
    // Install dependencies
    await installDependencies(targetDir);
    
    spinner.succeed(chalk.green('✅ Application created successfully!'));

    // Success message
    console.log(chalk.green('\n🎉 Success! Created ') + chalk.bold(appName) + chalk.green(' at:'));
    console.log(chalk.gray('   ' + targetDir));
    
    console.log(chalk.cyan('\n📋 Next steps:'));
    console.log(chalk.white(`   cd ${appName}`));
    console.log(chalk.white('   npm run dev'));
    
    console.log(chalk.cyan('\n📚 Available scripts:'));
    console.log(chalk.white('   npm run dev     - Start development server'));
    console.log(chalk.white('   npm run build   - Build for production'));
    console.log(chalk.white('   npm run test    - Run tests'));
    console.log(chalk.white('   npm run preview - Preview production build'));
    if (appType === 'desktop') {
      console.log(chalk.white('   npm run tauri:dev   - Start Tauri development'));
      console.log(chalk.white('   npm run tauri:build - Build desktop app'));
    }

    console.log(chalk.cyan('\n🔗 Learn more:'));
    console.log(chalk.gray('   Documentation: https://github.com/opensourcejay/osjkit#readme'));
    console.log(chalk.gray('   Issues: https://github.com/opensourcejay/osjkit/issues'));

  } catch (error) {
    spinner.fail('Failed to create application');
    
    // Cleanup on failure
    if (await fs.pathExists(targetDir)) {
      await fs.remove(targetDir);
    }
    
    throw error;
  }
}

async function copyTemplate(templateDir, targetDir, appName, useTypeScript) {
  const templateExists = await fs.pathExists(templateDir);
  if (!templateExists) {
    throw new Error(`Template directory not found: ${templateDir}`);
  }

  // Copy all files
  await fs.copy(templateDir, targetDir);

  // Update package.json with app name
  const packageJsonPath = path.join(targetDir, 'package.json');
  if (await fs.pathExists(packageJsonPath)) {
    const packageJson = await fs.readJson(packageJsonPath);
    packageJson.name = appName;
    await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });
  }

  // If TypeScript is requested, convert files
  if (useTypeScript) {
    await convertToTypeScript(targetDir);
  }
}

async function installDependencies(targetDir) {
  const { spawn } = require('child_process');
  
  return new Promise((resolve, reject) => {
    const npmInstall = spawn('npm', ['install'], {
      cwd: targetDir,
      stdio: ['ignore', 'ignore', 'pipe'],
      shell: true
    });

    let errorOutput = '';
    npmInstall.stderr.on('data', (data) => {
      errorOutput += data.toString();
    });

    npmInstall.on('close', (code) => {
      if (code !== 0) {
        reject(new Error(`Dependency installation failed: ${errorOutput}`));
      } else {
        resolve();
      }
    });

    npmInstall.on('error', (error) => {
      reject(new Error(`Failed to start npm install: ${error.message}`));
    });
  });
}

async function convertToTypeScript(targetDir) {
  // Rename .js files to .ts and .jsx to .tsx
  const renameFiles = async (dir) => {
    const items = await fs.readdir(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = await fs.stat(fullPath);
      
      if (stat.isDirectory() && !item.includes('node_modules')) {
        await renameFiles(fullPath);
      } else if (item.endsWith('.js') && !item.includes('vite.config')) {
        const newPath = fullPath.replace('.js', '.ts');
        await fs.rename(fullPath, newPath);
      } else if (item.endsWith('.jsx')) {
        const newPath = fullPath.replace('.jsx', '.tsx');
        await fs.rename(fullPath, newPath);
      }
    }
  };

  const srcPath = path.join(targetDir, 'src');
  if (await fs.pathExists(srcPath)) {
    await renameFiles(srcPath);
  }

  // Update package.json for TypeScript
  const packageJsonPath = path.join(targetDir, 'package.json');
  const packageJson = await fs.readJson(packageJsonPath);
  
  // Add TypeScript dependencies
  packageJson.devDependencies = {
    ...packageJson.devDependencies,
    'typescript': '^5.2.2',
    '@types/react': '^18.2.66',
    '@types/react-dom': '^18.2.22'
  };

  await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });

  // Create tsconfig.json
  const tsConfig = {
    compilerOptions: {
      target: 'ES2020',
      useDefineForClassFields: true,
      lib: ['ES2020', 'DOM', 'DOM.Iterable'],
      module: 'ESNext',
      skipLibCheck: true,
      moduleResolution: 'bundler',
      allowImportingTsExtensions: true,
      resolveJsonModule: true,
      isolatedModules: true,
      noEmit: true,
      jsx: 'react-jsx',
      strict: true,
      noUnusedLocals: true,
      noUnusedParameters: true,
      noFallthroughCasesInSwitch: true
    },
    include: ['src'],
    references: [{ path: './tsconfig.node.json' }]
  };

  await fs.writeJson(path.join(targetDir, 'tsconfig.json'), tsConfig, { spaces: 2 });

  // Create tsconfig.node.json
  const tsConfigNode = {
    compilerOptions: {
      composite: true,
      skipLibCheck: true,
      module: 'ESNext',
      moduleResolution: 'bundler',
      allowSyntheticDefaultImports: true
    },
    include: ['vite.config.ts']
  };

  await fs.writeJson(path.join(targetDir, 'tsconfig.node.json'), tsConfigNode, { spaces: 2 });

  // Rename vite.config.js to vite.config.ts
  const viteConfigJs = path.join(targetDir, 'vite.config.js');
  const viteConfigTs = path.join(targetDir, 'vite.config.ts');
  if (await fs.pathExists(viteConfigJs)) {
    await fs.rename(viteConfigJs, viteConfigTs);
  }
}

// Handle unhandled rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error(chalk.red('❌ Unhandled Rejection at:'), promise, chalk.red('reason:'), reason);
  process.exit(1);
});

program.parse();
