# Desktop Application

A production-ready desktop application built with React 18, Vite, and Tauri. Combines the power of web technologies with native desktop performance and system integration.

## ✨ Features

- 🖥️ **Native Desktop** - Built with Tauri for true native performance and small bundle sizes
- ⚡️ **Fast Development** - Built with Vite for lightning-fast development and hot reload
- 🎨 **CSS Modules** - Scoped and maintainable CSS using CSS Modules methodology
- 📱 **Responsive Design** - Adaptive UI that works great on different window sizes
- 🧪 **Testing Ready** - Pre-configured with Vitest and React Testing Library
- ⚛️ **Modern React** - Uses latest React 18 features with hooks and modern patterns
- 🦀 **Rust Backend** - Leverages Rust for secure, fast system-level operations
- 🔗 **API Integration** - Ready-to-use API service with cross-platform support
- 📄 **Sample Pages** - Complete About and Contact pages for quick customization
- 🔧 **TypeScript Support** - Optional TypeScript support available

## Prerequisites

**⚠️ IMPORTANT: Rust must be installed before running the desktop application!**

### Required Software
- **Node.js** (version 16 or higher) - [Download here](https://nodejs.org/)
- **Rust** (latest stable version) - **REQUIRED for Tauri**
- Platform-specific build tools

### Installing Rust

**Method 1: Using rustup (Recommended)**
1. Visit [rustup.rs](https://rustup.rs/)
2. Download and run the installer
3. Follow the installation prompts
4. Restart your terminal/command prompt
5. Verify installation: `rustc --version`

**Method 2: Command Line Install**
```bash
# Windows (PowerShell)
Invoke-WebRequest -Uri https://win.rustup.rs/ -OutFile rustup-init.exe
./rustup-init.exe

# macOS/Linux
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

### Platform-Specific Dependencies

**Windows:**
- Microsoft C++ Build Tools (Visual Studio Build Tools)
- Windows 10/11 SDK

**macOS:**
- Xcode Command Line Tools: `xcode-select --install`

**Linux (Ubuntu/Debian):**
```bash
sudo apt update
sudo apt install libwebkit2gtk-4.0-dev \
    build-essential \
    curl \
    wget \
    libssl-dev \
    libgtk-3-dev \
    libayatana-appindicator3-dev \
    librsvg2-dev
```

**For detailed setup instructions, visit:** https://tauri.app/v1/guides/getting-started/prerequisites

## Getting Started

### Quick Environment Check

Before starting development, run the environment checker to verify all dependencies:

**Windows:**
```bash
check-env.bat
```

**macOS/Linux:**
```bash
chmod +x check-env.sh
./check-env.sh
```

### Installation

1. **Verify Prerequisites**: Ensure Rust and Node.js are installed (see Prerequisites section above)
2. **Clone or download this project**
3. **Install Node.js dependencies:**
   ```bash
   npm install
   ```

### Development

**Start web development server (optional - for UI testing):**
```bash
npm run dev
```

**Start Tauri development (opens the desktop app):**
```bash
npm run tauri:dev
```

> **Note**: The first run may take several minutes as Rust dependencies are compiled.

### Building for Production

Build the desktop application:

```bash
npm run tauri:build
```

This will create platform-specific installers in the `src-tauri/target/release/bundle/` directory.

### Testing

Run tests:

```bash
npm run test
```

Run tests with UI:

```bash
npm run test:ui
```

## Project Structure

```
src/
├── components/          # React UI components
│   ├── Header/         # Header component with navigation
│   ├── Hero/           # Hero section component
│   └── Footer/         # Footer component
├── App.jsx             # Main application component
├── main.jsx            # Application entry point
├── index.css           # Global styles
└── App.css             # App-specific styles

src-tauri/
├── src/
│   └── main.rs         # Rust backend code
├── Cargo.toml          # Rust dependencies
├── tauri.conf.json     # Tauri configuration
└── build.rs            # Build script
```

## Tauri Commands

This template includes a sample Tauri command that demonstrates communication between the frontend and Rust backend:

```rust
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello {}, you've been greeted from Rust!", name)
}
```

You can call this from React:

```javascript
import { invoke } from '@tauri-apps/api/tauri'

const greetMsg = await invoke('greet', { name: 'World' })
```

## CSS Architecture

This project uses **CSS Modules** for styling:

- **Scoped Styles**: CSS class names are automatically scoped to prevent conflicts
- **Better Maintainability**: Easy to rename classes and see which styles belong to which component
- **Tree Shaking**: Unused styles can be removed during build
- **No Naming Conflicts**: No need to worry about global class name collisions

## Responsive Design

The application adapts to different window sizes using these breakpoints:

- Small: up to 767px
- Medium: 768px - 1023px
- Large: 1024px and above
- Extra Large: 1200px and above

## Available Scripts

- `npm run dev` - Start web development server
- `npm run build` - Build web assets
- `npm run preview` - Preview web build
- `npm run test` - Run tests
- `npm run test:ui` - Run tests with UI
- `npm run lint` - Run ESLint
- `npm run tauri:dev` - Start Tauri development
- `npm run tauri:build` - Build desktop application

## Configuration

### Tauri Configuration

The `src-tauri/tauri.conf.json` file contains the desktop app configuration:

- Window properties (size, title, etc.)
- Bundle settings (icons, identifier)
- Security settings
- API permissions

### Adding New Tauri Commands

1. Add the command function in `src-tauri/src/main.rs`
2. Register it in the `invoke_handler`
3. Call it from your React components using `invoke()`

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and development server
- **Tauri** - Desktop app framework
- **Rust** - Backend language
- **Vitest** - Testing framework
- **Testing Library** - Testing utilities
- **ESLint** - Code linting
- **CSS Modules** - Scoped CSS methodology

## Building for Distribution

### Windows
Creates `.msi` installer

### macOS
Creates `.dmg` and `.app` bundle

### Linux
Creates `.deb`, `.AppImage`, and other formats

The built applications will be code-signed if you configure signing certificates.

## Troubleshooting

### Common Issues

**"Error failed to get cargo metadata: program not found"**
- **Cause**: Rust/Cargo is not installed or not in PATH
- **Solution**: Install Rust using rustup (see Prerequisites section)
- **Verify**: Run `cargo --version` in terminal

**"WebView2 not found" (Windows)**
- **Cause**: WebView2 runtime not installed
- **Solution**: Download from [Microsoft WebView2](https://developer.microsoft.com/en-us/microsoft-edge/webview2/)

**Build fails on Linux**
- **Cause**: Missing system dependencies
- **Solution**: Install webkit2gtk and other dependencies (see Prerequisites)

**Tauri dev server doesn't start**
- **Cause**: Rust toolchain issues or missing dependencies
- **Solution**: 
  1. Run `rustup update`
  2. Ensure all platform dependencies are installed
  3. Try `npm run dev` first to verify Vite works

**"Permission denied" errors**
- **Cause**: Insufficient permissions for building
- **Solution**: Run terminal as administrator (Windows) or use sudo (Linux/macOS) only when necessary

### Getting Help
- Check the [Tauri Discord](https://discord.com/invite/tauri) for community support
- Review [Tauri documentation](https://tauri.app/v1/guides/debugging/application)
- Search [GitHub issues](https://github.com/tauri-apps/tauri/issues)

## Contributing

1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Resources

- [Tauri Documentation](https://tauri.app/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Rust Documentation](https://doc.rust-lang.org/)
