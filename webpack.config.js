const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // string
    filename: 'bundle.js', // string
    publicPath: '/', // string
  },

  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    },
  },

  // Source maps support ('inline-source-map' also works)
  devtool: 'source-map',

  // Add the loader for .ts files.
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'src')
      },
    ],
  },

  plugins: [
    new VueLoaderPlugin(),
  ],

  target: 'web', // enum

  devServer: {
    // proxy: { // proxy URLs to backend development server
    //   '/api': 'http://localhost:3000',
    // },
    contentBase: path.join(__dirname, 'dist'), // boolean | string | array, static file location
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    https: false, // true for self-signed, object for cert authority
    noInfo: false, // only errors & warns on hot reload
  },
}
