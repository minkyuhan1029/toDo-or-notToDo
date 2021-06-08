module.exports = {
  mode: 'development',
  entry: [
    'babel-polyfill',
    './client/index.js'
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {test: /\.scss$/i, use: ['style-loader', 'css-loader','sass-loader']}
    ]
  }
}
