# Desktop Application

A powerful desktop application built with React, Vite, and Tauri for native performance with web technologies.

## Features

- 🖥️ **Native Desktop** - Built with Tauri for true native performance
- ⚡️ **Fast Development** - Built with Vite for lightning-fast development
- 🎨 **BEM CSS** - Organized and maintainable CSS using BEM methodology
- 📱 **Responsive Design** - Works great on different window sizes
- 🧪 **Testing Ready** - Configured with Vitest and Testing Library
- ⚛️ **Modern React** - Uses latest React 18 features
- 🦀 **Rust Backend** - Leverages Rust for system-level operations
- 🔧 **TypeScript Support** - Optional TypeScript support

## Prerequisites

- Node.js (version 14 or higher)
- Rust (latest stable version)
- Platform-specific dependencies for Tauri

### Platform Setup

**Windows:**
- Microsoft C++ Build Tools

**macOS:**
- Xcode Command Line Tools

**Linux:**
- Various development packages (webkit2gtk, etc.)

For detailed setup instructions, visit: https://tauri.app/v1/guides/getting-started/prerequisites

## Getting Started

### Installation

1. Clone or download this project
2. Install Node.js dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm run dev
```

Start Tauri development (opens the desktop app):

```bash
npm run tauri:dev
```

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

This project uses **BEM (Block Element Modifier)** methodology for CSS:

- **Block**: Standalone entity (e.g., `header`, `hero`, `footer`)
- **Element**: Part of a block (e.g., `header__nav`, `hero__title`)
- **Modifier**: Flag for changing appearance (e.g., `button--large`, `nav--open`)

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
- **CSS BEM** - CSS methodology

## Building for Distribution

### Windows
Creates `.msi` installer

### macOS
Creates `.dmg` and `.app` bundle

### Linux
Creates `.deb`, `.AppImage`, and other formats

The built applications will be code-signed if you configure signing certificates.

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
