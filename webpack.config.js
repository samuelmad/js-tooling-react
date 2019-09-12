const path = require('path')

module.exports = {
  entry: "./src/index.js",
  output: {
    // path: './dist',
    path: path.join(__dirname, 'dist'),
    filename: 'app.bundle.js'
  }
}