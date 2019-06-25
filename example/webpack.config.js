const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const {
  DefinePlugin,
  HashedModuleIdsPlugin,
  HotModuleReplacementPlugin
} = require('webpack')

const DEV_ENV = process.env.NODE_ENV === 'development'
const PROD_ENV = process.env.NODE_ENV === 'production'

let webpackConfig = {
  entry: './index.tsx',

  output: {
    filename: DEV_ENV ? '[name].js' : 'js/[name].[contenthash:5].js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              experimentalWatchApi: true
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass')
            }
          }
        ]
      }
    ]
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      'teak-ui': path.resolve(__dirname, '../packages'),
      example: path.resolve(__dirname, '../example')
    },
    symlinks: false
  },

  context: path.resolve(__dirname, '.'),

  stats: 'errors-only',

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    }),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
}

if (DEV_ENV) {
  webpackConfig = merge(webpackConfig, {
    mode: 'development',

    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      compress: true,
      historyApiFallback: true,
      host: '0.0.0.0',
      hot: true,
      https: false,
      port: 3001,
      stats: 'errors-only',
      useLocalIp: true,
      open: true
    },

    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },

    devtool: 'inline-source-map',

    plugins: [new HotModuleReplacementPlugin()]
  })
}

if (PROD_ENV) {
  webpackConfig = merge(webpackConfig, {
    mode: 'production',

    devtool: 'source-map',

    plugins: [new CleanWebpackPlugin(), new HashedModuleIdsPlugin()]
  })
}

module.exports = webpackConfig
