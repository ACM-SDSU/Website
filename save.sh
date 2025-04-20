#!/bin/bash

# === CONFIGURE THESE ===
REMOTE_USER="acm"
REMOTE_HOST="acm.sdsu.edu"
REMOTE_PATH="public_html"  # your actual deployment path
BUILD_DIR="build"  # adjust if your build folder has a different name

# === DEPLOY SCRIPT START ===

# Require commit message
if [ -z "$1" ]; then
  echo "❗️Please provide a commit message."
  exit 1
fi

echo "🏗 Building project..."
npm run build || exit 1

echo "📦 Committing to GitHub..."
echo "Git Add"
git add .
echo "Git Commit"
git commit -m "$1"
echo "Git Push"
git push || exit 1

echo "📦 Zipping build..."
rm -f build.zip
cd "$BUILD_DIR"
zip -r ../build.zip .
cd ..

echo "📤 Uploading to server..."
scp build.zip "$REMOTE_USER@$REMOTE_HOST:~" || exit 1

echo "🔧 Deploying on server..."
ssh "$REMOTE_USER@$REMOTE_HOST" << EOF
  mkdir -p "$REMOTE_PATH"
  mv ~/build.zip "$REMOTE_PATH"
  cd "$REMOTE_PATH"
  unzip -o build.zip
  rm build.zip
EOF

echo "✅ Deployment complete!"

