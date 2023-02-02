#!/usr/bin/env sh

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
# echo > .nojekyll

# if you are deploying to a custom domain
# echo 'jimmydt.ca' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:jdomaga/SquawkClockPublic.git main:gh-pages

cd ../