# Contributing to OSJKIT Desktop Template

Thank you for your interest in contributing! This document provides guidelines for contributing to the OSJKIT desktop template.

## Development Setup

1. **Prerequisites:**
   - Node.js (version 16+)
   - Rust (latest stable version) - **REQUIRED**
   - Platform-specific build tools

2. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd your-project-name
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start development:**
   ```bash
   npm run tauri:dev
   ```

## Code Style Guidelines

### JavaScript/React
- Use functional components with hooks
- Follow the existing component structure pattern
- Use descriptive component and variable names
- Keep components focused and single-purpose
- Consider desktop-specific UX patterns

### CSS Modules
- Use camelCase naming for CSS classes
- Create one module per component
- Consider desktop window resizing behavior
- Follow responsive design for different window sizes

### Tauri/Rust
- Follow Rust best practices for any backend modifications
- Use Tauri's secure IPC patterns
- Test system integrations thoroughly

## Desktop-Specific Considerations

- **Window Management**: Consider how components behave during window resize
- **Native Integration**: Test system features (file dialogs, notifications, etc.)
- **Performance**: Optimize for desktop performance characteristics
- **Cross-Platform**: Test on multiple operating systems when possible

## Testing

- Test React components: `npm run test`
- Test desktop builds: `npm run tauri:build`
- Test on multiple platforms when possible
- Ensure proper window behavior and system integration

## Submitting Changes

1. Create a feature branch: `git checkout -b feature/your-feature-name`
2. Make your changes following the guidelines above
3. Test both web and desktop functionality
4. Run linting: `npm run lint`
5. Test build process: `npm run tauri:build`
6. Commit with a descriptive message
7. Push your branch and create a pull request

## Questions?

If you have questions about contributing, please open an issue for discussion.
