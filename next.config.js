const nextImages = require('next-images')
const withPlugins = require('next-compose-plugins')

const fullPlugins = withPlugins([
  [nextImages, {
    esModule: true,
  }]
])
console.log(fullPlugins)
module.exports = fullPlugins
