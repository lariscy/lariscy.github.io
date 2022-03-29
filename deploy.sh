#!/usr/bin/env sh

# abort on errors
set -e

# remove any previous build
rm -rf docs/.vitepress/dist

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy'

# rename 'main' branch to 'gh-pages'
git branch | grep main && git branch -m main gh-pages
# rename 'master' branch to 'gh-pages'
#   (fallback for older git versions that default to 'master')
git branch | grep master && git branch -m master gh-pages

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:lariscy/lariscy.github.io.git gh-pages

cd -
