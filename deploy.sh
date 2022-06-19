#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -b main
git add -A
git commit -m 'deploy'
git push -f git@github.com:madsstoumann/layout.git main:gh-pages

cd -

# https://vitejs.dev/guide/static-deploy.html#github-pages
# OR:

# npm run build
# git add dist -f
# git commit -m "Adding dist"
# git subtree push --prefix dist origin gh-pages