#!/usr/bin/env sh

# Git pull
echo "pulling from git... "
git pull

# install dependencies
echo "installing dependecies... "
yarn install

# build
echo "building... "
yarn build

# PM2 restart ecosystem.config.js
echo "restart pm2 services... "
pm2 restart ecosystem.config.js --only elroichurch.id

echo "done... "
