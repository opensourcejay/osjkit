# React Web Application

A modern, responsive web application built with React, Vite, and CSS BEM methodology.

## Features

- ⚡️ **Fast Development** - Built with Vite for lightning-fast development
- 🎨 **BEM CSS** - Organized and maintainable CSS using BEM methodology
- 📱 **Mobile Responsive** - Fully responsive design that works on all devices
- 🧪 **Testing Ready** - Configured with Vitest and Testing Library
- ⚛️ **Modern React** - Uses latest React 18 features
- 🔧 **TypeScript Support** - Optional TypeScript support

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone or download this project
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Build the application for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

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
├── components/          # Reusable UI components
│   ├── Header/         # Header component with navigation
│   ├── Hero/           # Hero section component
│   └── Footer/         # Footer component
├── App.jsx             # Main application component
├── main.jsx            # Application entry point
├── index.css           # Global styles
└── App.css             # App-specific styles
```

## CSS Architecture

This project uses **BEM (Block Element Modifier)** methodology for CSS:

- **Block**: Standalone entity that is meaningful on its own (e.g., `header`, `hero`, `footer`)
- **Element**: A part of a block that has no standalone meaning (e.g., `header__nav`, `hero__title`)
- **Modifier**: A flag on a block or element for changing appearance or behavior (e.g., `button--large`, `nav--open`)

### Example BEM Usage

```css
/* Block */
.header { }

/* Element */
.header__nav { }
.header__title { }

/* Modifier */
.header__nav--open { }
.button--large { }
```

## Responsive Design

The application is built with a mobile-first approach using these breakpoints:

- Mobile: up to 767px
- Tablet: 768px - 1023px
- Desktop: 1024px and above
- Large Desktop: 1200px and above

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run test:ui` - Run tests with UI
- `npm run lint` - Run ESLint

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and development server
- **Vitest** - Testing framework
- **Testing Library** - Testing utilities
- **ESLint** - Code linting
- **CSS BEM** - CSS methodology

## Contributing

1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the ISC License.
