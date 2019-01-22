const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const IS_PRODUCTION = process.env.NODE_ENV === 'production'

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
      vue$: 'vue/dist/vue.esm.js',
    },
  },

  // Source maps support ('inline-source-map' also works)
  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: path.resolve(__dirname, 'src'),
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'src'),
      },
      {
        test: /\.less$/,
        use: [
          !IS_PRODUCTION ? 'style-loader' : MiniCssExtractPlugin.loader, // CommonJS => Style nodes
          'css-loader', // CSS => CommonJS
          'less-loader', // Less => CSS
        ],
      },
    ],
  },

  plugins: [new VueLoaderPlugin()],

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
