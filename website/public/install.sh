#!/bin/bash

# RecCli Installation Script
# This script installs RecCli via Homebrew

set -e

echo "🔴 Installing RecCli..."
echo ""

# Check if Homebrew is installed
if ! command -v brew &> /dev/null; then
    echo "❌ Error: Homebrew is not installed."
    echo ""
    echo "Please install Homebrew first:"
    echo "  /bin/bash -c \"\$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\""
    echo ""
    exit 1
fi

echo "✓ Homebrew found"
echo ""

# Install RecCli via Homebrew
echo "Installing RecCli via Homebrew..."
brew install willluecke/reccli/reccli

echo ""
echo "✅ RecCli installed successfully!"
echo ""
echo "To get started, open a new terminal window."
echo "The RecCli floating button will appear automatically."
echo ""
echo "For help, visit: https://github.com/willluecke/reccli"
