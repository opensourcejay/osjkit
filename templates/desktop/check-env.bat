@echo off
echo =====================================
echo OSJKIT Desktop Environment Check
echo =====================================
echo.

echo Checking Node.js...
node --version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✓ Node.js is installed
    node --version
) else (
    echo ✗ Node.js is NOT installed
    echo Please install Node.js from https://nodejs.org/
)

echo.
echo Checking npm...
npm --version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✓ npm is installed
    npm --version
) else (
    echo ✗ npm is NOT installed
)

echo.
echo Checking Rust...
rustc --version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✓ Rust is installed
    rustc --version
) else (
    echo ✗ Rust is NOT installed
    echo Please install Rust from https://rustup.rs/
    echo This is REQUIRED for Tauri desktop development!
)

echo.
echo Checking Cargo...
cargo --version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✓ Cargo is installed
    cargo --version
) else (
    echo ✗ Cargo is NOT installed
    echo Cargo should come with Rust. Please reinstall Rust from https://rustup.rs/
)

echo.
echo =====================================
echo Environment Check Complete
echo =====================================
echo.
echo If any items show ✗, please install them before running:
echo npm run tauri:dev
echo.
pause
