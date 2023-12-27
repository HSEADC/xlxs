const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    theory: './src/theory.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'docs')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
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
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          }
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
        test: /\.(png|svg|jpg|jpeg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2|)$/i,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    }),

    // Chunk theory
    new HtmlWebpackPlugin({
      template: './src/theory.html',
      filename: './theory.html',
      chunks: ['theory'] // Дублируем имя Chunks в массив, чтоб он подгружал
    }),

    // Index
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      chunks: ['index'] // добавляем ко всем html, которые у нас были до это пары
    }),

    // Section
    //Tests
    new HtmlWebpackPlugin({
      template: './src/tests.html',
      filename: './tests.html',
      chunks: ['index'] // добавляем ко всем html, которые у нас были до это пары
    }),
    //Articles
    new HtmlWebpackPlugin({
      template: './src/articles.html',
      filename: './articles.html',
      chunks: ['index'] // добавляем ко всем html, которые у нас были до это пары
    }),
    // Cards
    new HtmlWebpackPlugin({
      template: './src/cards.html',
      filename: './cards.html',
      chunks: ['index'] // добавляем ко всем html, которые у нас были до это пары
    }),

    //Article
    // Test 1
    new HtmlWebpackPlugin({
      template: './src/testss/test1.html',
      filename: './testss/test1.html',
      chunks: ['index'] // добавляем ко всем html, которые у нас были до это пары
    }),

    new HtmlWebpackPlugin({
      template: './src/testss/test1-true.html',
      filename: './testss/test1-true.html',
      chunks: ['index'] // добавляем ко всем html, которые у нас были до это пары
    }),

    // Article 1
    new HtmlWebpackPlugin({
      template: './src/articles/art1.html',
      filename: './articles/art1.html',
      chunks: ['index'] // добавляем ко всем html, которые у нас были до это пары
    }),
    // Card 1
    new HtmlWebpackPlugin({
      template: './src/cards/card1.html',
      filename: './cards/card1.html'
    }),
    // Card 1 Back
    new HtmlWebpackPlugin({
      template: './src/cards/card1-b.html',
      filename: './cards/card1-b.html'
    }),

    // Responsive
    new HtmlWebpackPlugin({
      template: './src/responsive-images.html',
      filename: './responsive-images.html',
      chunks: ['index'] // добавляем ко всем html, которые у нас были до это пары
    }),

    // About
    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: './about.html',
      chunks: ['index'] // добавляем ко всем html, которые у нас были до это пары
    }),

    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      }
    ]),

    // MenuButns
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/menubutns.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
