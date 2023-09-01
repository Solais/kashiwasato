/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  sassOptions: {
    includePaths: ['./src/**/*.scss'],
  },
}

module.exports = nextConfig
