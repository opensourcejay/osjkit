# Contributing to OSJKIT Web Template

Thank you for your interest in contributing! This document provides guidelines for contributing to the OSJKIT web template.

## Development Setup

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd your-project-name
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

## Code Style Guidelines

### JavaScript/React
- Use functional components with hooks
- Follow the existing component structure pattern
- Use descriptive component and variable names
- Keep components focused and single-purpose

### CSS Modules
- Use camelCase naming for CSS classes
- Create one module per component
- Avoid global styles unless absolutely necessary
- Follow the existing responsive design patterns

### File Organization
```
ComponentName/
├── ComponentName.jsx
├── ComponentName.module.css
└── index.js
```

## Adding New Components

1. Create a new folder in `src/components/`
2. Follow the naming convention: `ComponentName/`
3. Include all three files: `.jsx`, `.module.css`, and `index.js`
4. Export the component from `index.js`
5. Update `src/components/README.md` with documentation

## API Integration

- Use the existing API service in `src/utils/api.js`
- Follow the established error handling patterns
- Add proper loading states
- Include appropriate error messaging

## Testing

- Write tests for new components
- Test user interactions and edge cases
- Ensure components work across different screen sizes
- Run tests before submitting: `npm run test`

## Submitting Changes

1. Create a feature branch: `git checkout -b feature/your-feature-name`
2. Make your changes following the guidelines above
3. Test your changes thoroughly
4. Run linting: `npm run lint`
5. Commit with a descriptive message
6. Push your branch and create a pull request

## Questions?

If you have questions about contributing, please open an issue for discussion.
