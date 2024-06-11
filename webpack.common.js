const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

module.exports = {
  //!JS файлы
  entry: {
    index: './src/index.js',
    stations: './src/javascript/pages/stations.js',
    chronology: './src/javascript/pages/chrono.js',
    articles: './src/javascript/pages/articles.js'
    // styleguide: './src/javascript/pages/styleguide.js',
    // aboutus: './src/javascript/pages/aboutus.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs')
    // clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|mp4)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),

    // Landing page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/index.html',
      filename: './index.html',
      chunks: ['index']
    }),
    //!Страницы
    // Internal pages
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/СategoryStations.html',
      filename: './СategoryStations.html',
      chunks: ['stations']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/CategoryArticles.html',
      filename: './CategoryArticles.html',
      chunks: ['articles']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/CategoryChrono.html',
      filename: './CategoryChrono.html',
      chunks: ['chronology']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/AboutUs.html',
      filename: './AboutUs.html',
      chunks: ['about']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/Styleguide.html',
      filename: './Styleguide.html',
      chunks: ['styleguide']
    })
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  },

  stats: {
    children: true
  }
}
