module.exports = {
  entry: "./src/app.js",
  output: {
    path: __dirname + "/client/js",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { loader: 'babel-loader' }
    ]
  }
}
