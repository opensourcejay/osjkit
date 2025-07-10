#!/bin/bash

echo "====================================="
echo "OSJKIT Desktop Environment Check"
echo "====================================="
echo ""

echo "Checking Node.js..."
if command -v node >/dev/null 2>&1; then
    echo "✓ Node.js is installed"
    node --version
else
    echo "✗ Node.js is NOT installed"
    echo "Please install Node.js from https://nodejs.org/"
fi

echo ""
echo "Checking npm..."
if command -v npm >/dev/null 2>&1; then
    echo "✓ npm is installed"
    npm --version
else
    echo "✗ npm is NOT installed"
fi

echo ""
echo "Checking Rust..."
if command -v rustc >/dev/null 2>&1; then
    echo "✓ Rust is installed"
    rustc --version
else
    echo "✗ Rust is NOT installed"
    echo "Please install Rust from https://rustup.rs/"
    echo "This is REQUIRED for Tauri desktop development!"
fi

echo ""
echo "Checking Cargo..."
if command -v cargo >/dev/null 2>&1; then
    echo "✓ Cargo is installed"
    cargo --version
else
    echo "✗ Cargo is NOT installed"
    echo "Cargo should come with Rust. Please reinstall Rust from https://rustup.rs/"
fi

echo ""
echo "====================================="
echo "Environment Check Complete"
echo "====================================="
echo ""
echo "If any items show ✗, please install them before running:"
echo "npm run tauri:dev"
echo ""
