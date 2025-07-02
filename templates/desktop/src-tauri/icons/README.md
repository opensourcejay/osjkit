# Tauri Icons

This directory should contain the application icons for different platforms:

- `32x32.png` - Small icon for Windows
- `128x128.png` - Medium icon
- `128x128@2x.png` - High DPI medium icon  
- `icon.icns` - macOS icon bundle
- `icon.ico` - Windows icon file

## Generating Icons

You can use the Tauri CLI to generate icons from a single source image:

```bash
npm run tauri icon path/to/your/icon.png
```

This will automatically generate all required icon formats.

## Requirements

- Source image should be at least 1024x1024 pixels
- PNG format recommended
- Square aspect ratio
