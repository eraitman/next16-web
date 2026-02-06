#!/bin/bash

# Configuration
LINK_NAME="dist"
SIDE_A="distA"
SIDE_B="distB"

echo "🚀 Starting Web Deployment Logic..."

# 1. Determine which side to build to
if [ -L "$LINK_NAME" ]; then
    CURRENT_TARGET=$(readlink "$LINK_NAME")
    if [ "$CURRENT_TARGET" == "$SIDE_A" ] || [ "$CURRENT_TARGET" == "./$SIDE_A" ]; then
        NEXT_TARGET="$SIDE_B"
    else
        NEXT_TARGET="$SIDE_A"
    fi
else
    if [ -d "$LINK_NAME" ]; then
        echo "⚠️  Existing 'dist' directory found. Removing it."
        rm -rf "$LINK_NAME"
    fi
    NEXT_TARGET="$SIDE_A"
fi

echo "📍 Current active: $([ -L "$LINK_NAME" ] && readlink "$LINK_NAME" || echo "none")"
echo "🛠 Building new version to: $NEXT_TARGET"

# 2. Build the project
yarn build

# 3. Prepare target directory
rm -rf "$NEXT_TARGET"
mkdir -p "$NEXT_TARGET"

# 4. Copy standalone output and assets
# Next.js standalone output is in .next/standalone
if [ -d ".next/standalone" ]; then
    echo "📂 Copying standalone files (including .next) to $NEXT_TARGET..."
    # Use /. to copy all contents including hidden files
    cp -r .next/standalone/. "$NEXT_TARGET/"
    
    echo "📂 Copying static and public assets..."
    mkdir -p "$NEXT_TARGET/.next"
    cp -r .next/static "$NEXT_TARGET/.next/static"
    cp -r public "$NEXT_TARGET/public"
else
    echo "❌ Error: .next/standalone not found. Ensure 'output: standalone' is in next.config.ts"
    exit 1
fi

# 5. Switch the symbolic link
echo "🔄 Switching symbolic link '$LINK_NAME' -> '$NEXT_TARGET'..."
ln -sfn "$NEXT_TARGET" "$LINK_NAME"

# 6. PM2 Reload
if command -v pm2 >/dev/null 2>&1; then
    echo "♻️  Reloading PM2 instances..."
    pm2 reload ecosystem.config.cjs --env production || pm2 start ecosystem.config.cjs
else
    echo "⚠️  PM2 not found. Please ensure PM2 is installed globally."
fi

echo "✅ Web Deployment complete! Active side is now: $NEXT_TARGET"
