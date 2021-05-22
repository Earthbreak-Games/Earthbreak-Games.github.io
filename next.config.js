const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? 'https://github.com/Earthbreak-Games/Earthbreak-Games.github.io' : '',
}