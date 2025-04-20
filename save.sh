#!/bin/bash

if [ -z "$1" ]; then
  echo "❗️Please provide a commit message."
  exit 1
fi

echo "🏗 Building project..."
npm run build

echo "📦 Adding files to git..."
git add .

echo "✅ Committing with message: $1"
git commit -m "$1"

echo "🚀 Pushing to GitHub..."
git push
