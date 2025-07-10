# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please follow responsible disclosure practices:

### For OSJKIT Template Issues
1. **Do NOT** open a public issue for security vulnerabilities
2. Email the maintainer directly (if available) or open a private security advisory
3. Include detailed information about the vulnerability
4. Allow time for the issue to be addressed before public disclosure

### For Your Desktop Application
When using this template for your own applications:

1. **Keep dependencies updated** - Regularly update npm packages and Rust dependencies
2. **Environment Variables** - Never commit sensitive data like API keys
3. **Input Validation** - Always validate user inputs and IPC commands
4. **Tauri Security** - Follow Tauri security best practices
5. **Code Signing** - Sign your desktop applications for distribution

## Security Best Practices

### Development
- Use the provided `.env.example` as a template for environment variables
- Never commit `.env.local` or `.env.production` files
- Regularly audit dependencies with `npm audit` and `cargo audit`
- Use the latest stable versions of React, Tauri, and other dependencies

### Tauri-Specific Security
- **IPC Security** - Validate all IPC commands and responses
- **File System Access** - Limit file system permissions to what's necessary
- **Network Access** - Use allowlists for network requests
- **Command Execution** - Avoid or carefully validate system command execution
- **Auto-updater** - Implement secure update mechanisms

### API Security
- Validate all API responses
- Implement proper error handling that doesn't expose sensitive information
- Use HTTPS for all API communications
- Implement rate limiting for API calls

### Build Security
- Ensure production builds don't include development tools
- Use proper Tauri security configurations
- Sign desktop applications before distribution
- Minimize permissions and capabilities

## Dependencies

This template includes security-focused configurations:
- ESLint for code quality and security patterns
- Tauri security configurations
- Updated dependencies with known security fixes
- Proper .gitignore to prevent sensitive file commits

## Tauri Security Features

This template leverages Tauri's built-in security features:
- Process isolation between frontend and backend
- Limited system access by default
- Secure IPC communication
- Content Security Policy enforcement

## Questions?

For non-security related questions, please open a regular issue.
For security concerns, please follow the reporting guidelines above.
