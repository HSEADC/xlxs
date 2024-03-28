const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    theory: './src/theory.js',
    select: './src/select.js'
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

    // Chunk select
    new HtmlWebpackPlugin({
      template: './src/select.html',
      filename: './select.html',
      chunks: ['select'] // Дублируем имя Chunks в массив, чтоб он подгружал
    }),

    // Index
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      chunks: ['index'] // добавляем ко всем html, которые у нас были до это пары
    }),

    // Main
    new HtmlWebpackPlugin({
      template: './src/main.html',
      filename: './main.html',
      chunks: ['index'] // добавляем ко всем html, которые у нас были до это пары
    }),

    // Style
    new HtmlWebpackPlugin({
      template: './src/style.html',
      filename: './style.html',
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
      template: './src/articles/block.html',
      filename: './articles/block.html',
      chunks: ['index']
    }),

    // Article 2
    new HtmlWebpackPlugin({
      template: './src/articles/calend.html',
      filename: './articles/calend.html',
      chunks: ['index']
    }),

    // Article 3
    new HtmlWebpackPlugin({
      template: './src/articles/demo.html',
      filename: './articles/demo.html',
      chunks: ['index']
    }),

    // Article 4
    new HtmlWebpackPlugin({
      template: './src/articles/derevo.html',
      filename: './articles/derevo.html',
      chunks: ['index']
    }),

    // Article 5
    new HtmlWebpackPlugin({
      template: './src/articles/kolco.html',
      filename: './articles/kolco.html',
      chunks: ['index']
    }),

    // Article 6
    new HtmlWebpackPlugin({
      template: './src/articles/krug.html',
      filename: './articles/krug.html',
      chunks: ['index']
    }),

    // Article 7
    new HtmlWebpackPlugin({
      template: './src/articles/linear.html',
      filename: './articles/linear.html',
      chunks: ['index']
    }),

    // Article 8
    new HtmlWebpackPlugin({
      template: './src/articles/matrica.html',
      filename: './articles/matrica.html',
      chunks: ['index']
    }),

    // Article 9
    new HtmlWebpackPlugin({
      template: './src/articles/obl.html',
      filename: './articles/obl.html',
      chunks: ['index']
    }),

    // Article 10
    new HtmlWebpackPlugin({
      template: './src/articles/stolb.html',
      filename: './articles/stolb.html',
      chunks: ['index']
    }),

    // Article 11
    new HtmlWebpackPlugin({
      template: './src/articles/svech.html',
      filename: './articles/svech.html',
      chunks: ['index']
    }),

    // Article 12
    new HtmlWebpackPlugin({
      template: './src/articles/usi.html',
      filename: './articles/usi.html',
      chunks: ['index']
    }),

    // Article 13
    new HtmlWebpackPlugin({
      template: './src/articles/pusyr.html',
      filename: './articles/pusyr.html',
      chunks: ['index']
    }),

    // Article 14
    new HtmlWebpackPlugin({
      template: './src/articles/plotn.html',
      filename: './articles/plotn.html',
      chunks: ['index']
    }),

    // Article 15
    new HtmlWebpackPlugin({
      template: './src/articles/hord.html',
      filename: './articles/hord.html',
      chunks: ['index']
    }),

    // Article 16
    new HtmlWebpackPlugin({
      template: './src/articles/gant.html',
      filename: './articles/gant.html',
      chunks: ['index']
    }),

    // Article 17
    new HtmlWebpackPlugin({
      template: './src/articles/pogresh.html',
      filename: './articles/pogresh.html',
      chunks: ['index']
    }),

    // Article 18
    new HtmlWebpackPlugin({
      template: './src/articles/venna.html',
      filename: './articles/venna.html',
      chunks: ['index']
    }),

    // Article 19
    new HtmlWebpackPlugin({
      template: './src/articles/rass.html',
      filename: './articles/rass.html',
      chunks: ['index']
    }),

    // Article 20
    new HtmlWebpackPlugin({
      template: './src/articles/diapaz.html',
      filename: './articles/diapaz.html',
      chunks: ['index']
    }),

    // Article 21
    new HtmlWebpackPlugin({
      template: './src/articles/kagi.html',
      filename: './articles/kagi.html',
      chunks: ['index']
    }),

    // Article 22
    new HtmlWebpackPlugin({
      template: './src/articles/duga.html',
      filename: './articles/duga.html',
      chunks: ['index']
    }),

    // Article 23
    new HtmlWebpackPlugin({
      template: './src/articles/radial.html',
      filename: './articles/radial.html',
      chunks: ['index']
    }),

    // Article 24
    new HtmlWebpackPlugin({
      template: './src/articles/teplo.html',
      filename: './articles/teplo.html',
      chunks: ['index']
    }),

    // Article 25
    new HtmlWebpackPlugin({
      template: './src/articles/rosa.html',
      filename: './articles/rosa.html',
      chunks: ['index']
    }),

    // Article 26
    new HtmlWebpackPlugin({
      template: './src/articles/marim.html',
      filename: './articles/marim.html',
      chunks: ['index']
    }),

    // Article 27
    new HtmlWebpackPlugin({
      template: './src/articles/bar.html',
      filename: './articles/bar.html',
      chunks: ['index']
    }),

    // Article 28
    new HtmlWebpackPlugin({
      template: './src/articles/spiral.html',
      filename: './articles/spiral.html',
      chunks: ['index']
    }),

    // Article 29
    new HtmlWebpackPlugin({
      template: './src/articles/podschet.html',
      filename: './articles/podschet.html',
      chunks: ['index']
    }),

    // Article 30
    new HtmlWebpackPlugin({
      template: './src/articles/krest.html',
      filename: './articles/krest.html',
      chunks: ['index']
    }),

    // Card 1
    new HtmlWebpackPlugin({
      template: './src/cards/card1-b.html',
      filename: './cards/card1-b.html'
    }),

    // Card Krug
    new HtmlWebpackPlugin({
      template: './src/cards/krug.html',
      filename: './cards/krug.html'
    }),
    // Card Krug
    new HtmlWebpackPlugin({
      template: './src/cards/krug1.html',
      filename: './cards/krug1.html'
    }),
    // Card Svech
    new HtmlWebpackPlugin({
      template: './src/cards/svech.html',
      filename: './cards/svech.html'
    }),
    // Card Svech
    new HtmlWebpackPlugin({
      template: './src/cards/svech1.html',
      filename: './cards/svech1.html'
    }),
    // Card Derevo
    new HtmlWebpackPlugin({
      template: './src/cards/derevo.html',
      filename: './cards/derevo.html'
    }),
    // Card Derevo
    new HtmlWebpackPlugin({
      template: './src/cards/derevo1.html',
      filename: './cards/derevo1.html'
    }),
    // Card kolco
    new HtmlWebpackPlugin({
      template: './src/cards/kolco.html',
      filename: './cards/kolco.html'
    }),
    // Card kolco
    new HtmlWebpackPlugin({
      template: './src/cards/kolco1.html',
      filename: './cards/kolco1.html'
    }),
    // Card demo
    new HtmlWebpackPlugin({
      template: './src/cards/demo.html',
      filename: './cards/demo.html'
    }),
    // Card demo
    new HtmlWebpackPlugin({
      template: './src/cards/demo1.html',
      filename: './cards/demo1.html'
    }),
    // Card Obl
    new HtmlWebpackPlugin({
      template: './src/cards/obl.html',
      filename: './cards/obl.html'
    }),
    // Card Obl
    new HtmlWebpackPlugin({
      template: './src/cards/obl1.html',
      filename: './cards/obl1.html'
    }),
    // Card Stolb
    new HtmlWebpackPlugin({
      template: './src/cards/stolb.html',
      filename: './cards/stolb.html'
    }),
    // Card Stolb
    new HtmlWebpackPlugin({
      template: './src/cards/stolb1.html',
      filename: './cards/stolb1.html'
    }),
    // Card Usi
    new HtmlWebpackPlugin({
      template: './src/cards/usi.html',
      filename: './cards/usi.html'
    }),
    // Card Usi
    new HtmlWebpackPlugin({
      template: './src/cards/usi1.html',
      filename: './cards/usi1.html'
    }),
    // Card Linear
    new HtmlWebpackPlugin({
      template: './src/cards/linear.html',
      filename: './cards/linear.html'
    }),
    // Card Linear
    new HtmlWebpackPlugin({
      template: './src/cards/linear1.html',
      filename: './cards/linear1.html'
    }),
    // Card block
    new HtmlWebpackPlugin({
      template: './src/cards/block.html',
      filename: './cards/block.html'
    }),
    // Card block
    new HtmlWebpackPlugin({
      template: './src/cards/block1.html',
      filename: './cards/block1.html'
    }),
    // Card matrica
    new HtmlWebpackPlugin({
      template: './src/cards/matrica.html',
      filename: './cards/matrica.html'
    }),
    // Card matrica
    new HtmlWebpackPlugin({
      template: './src/cards/matrica1.html',
      filename: './cards/matrica1.html'
    }),
    // Card calend
    new HtmlWebpackPlugin({
      template: './src/cards/calend.html',
      filename: './cards/calend.html'
    }),
    // Card calend
    new HtmlWebpackPlugin({
      template: './src/cards/calend1.html',
      filename: './cards/calend1.html'
    }),
    // Card usi
    new HtmlWebpackPlugin({
      template: './src/cards/usi.html',
      filename: './cards/usi.html'
    }),
    // Card usi
    new HtmlWebpackPlugin({
      template: './src/cards/usi1.html',
      filename: './cards/usi1.html'
    }),
    // Card pusyr
    new HtmlWebpackPlugin({
      template: './src/cards/pusyr.html',
      filename: './cards/pusyr.html'
    }),
    // Card pusyr
    new HtmlWebpackPlugin({
      template: './src/cards/pusyr1.html',
      filename: './cards/pusyr1.html'
    }),
    // Card plotn
    new HtmlWebpackPlugin({
      template: './src/cards/plotn.html',
      filename: './cards/plotn.html'
    }),
    // Card plotn
    new HtmlWebpackPlugin({
      template: './src/cards/plotn1.html',
      filename: './cards/plotn1.html'
    }),
    // Card hord
    new HtmlWebpackPlugin({
      template: './src/cards/hord.html',
      filename: './cards/hord.html'
    }),
    // Card hord
    new HtmlWebpackPlugin({
      template: './src/cards/hord1.html',
      filename: './cards/hord1.html'
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
