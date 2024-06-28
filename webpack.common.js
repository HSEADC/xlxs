const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
// const CopyPlugin = require('copy-webpack-plugin')
// const SitemapPlugin = require('sitemap-webpack-plugin').default

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    theory: './src/theory.js',
    select: './src/select.js',
    //тестики
    test: './src/testss/test1.js',
    test2: './src/testss/test2.js',
    test3: './src/testss/test3.js',
    test4: './src/testss/test4.js',
    test5: './src/testss/test5.js',
    test6: './src/testss/test6.js',
    test7: './src/testss/test7.js',
    test8: './src/testss/test8.js',
    test9: './src/testss/test9.js',
    test10: './src/testss/test10.js',
    test11: './src/testss/test11.js',
    test13: './src/testss/test13.js',
    test14: './src/testss/test14.js',
    // модуль переворота карточек
    block: './src/cards/block.js',
    burger: './src/adaptive-burger.js',
    search_vanilla: './src/search-vanilla.js'
    // menubar: './src/menubar.jsx',
    // search: './src/search.jsx'
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
    // new SitemapPlugin({ base: 'https://xlxs-adc.ac', paths }),

    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, 'src/images/'),
    //       to: path.resolve(__dirname, 'dev_build/images/')
    //     },
    //     {
    //       from: path.resolve(__dirname, 'src/images/'),
    //       to: path.resolve(__dirname, 'docs/images/')
    //     }
    //   ]
    // }),

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
    // new HtmlWebpackPlugin({
    //   template: './src/index.ejs',
    //   filename: './index.html',
    //   chunks: ['index', 'menubar']
    // }),

    new HtmlWebpackPlugin({
      template: './src/search-vanilla.html',
      filename: './search-vanilla.html',
      chunks: ['search_vanilla', 'menubar']
    }),
    // searchPage
    new HtmlWebpackPlugin({
      template: './src/search.html',
      filename: './search.html',
      chunks: ['search', 'menubar']
    }),

    // Index
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      chunks: ['index', 'burger'] // добавляем ко всем html, которые у нас были до это пары
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

    // 404
    new HtmlWebpackPlugin({
      template: './src/404.html',
      filename: './404.html',
      chunks: ['index'] // добавляем ко всем html, которые у нас были до это пары
    }),

    // 500
    new HtmlWebpackPlugin({
      template: './src/500.html',
      filename: './500.html',
      chunks: ['index'] // добавляем ко всем html, которые у нас были до это пары
    }),

    // 505
    new HtmlWebpackPlugin({
      template: './src/505.html',
      filename: './505.html',
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
      chunks: ['test', 'index'] // добавляем ко всем html, которые у нас были до это пары
    }),

    new HtmlWebpackPlugin({
      template: './src/testss/test2.html',
      filename: './testss/test2.html',
      chunks: ['test2', 'index'] // добавляем ко всем html, которые у нас были до это пары
    }),

    new HtmlWebpackPlugin({
      template: './src/testss/test3.html',
      filename: './testss/test3.html',
      chunks: ['test3', 'index'] // добавляем ко всем html, которые у нас были до это пары
    }),

    new HtmlWebpackPlugin({
      template: './src/testss/test4.html',
      filename: './testss/test4.html',
      chunks: ['test4', 'index'] // добавляем ко всем html, которые у нас были до это пары
    }),

    new HtmlWebpackPlugin({
      template: './src/testss/test5.html',
      filename: './testss/test5.html',
      chunks: ['test5', 'index'] // добавляем ко всем html, которые у нас были до это пары
    }),

    new HtmlWebpackPlugin({
      template: './src/testss/test6.html',
      filename: './testss/test6.html',
      chunks: ['test6', 'index'] // добавляем ко всем html, которые у нас были до это пары
    }),

    new HtmlWebpackPlugin({
      template: './src/testss/test7.html',
      filename: './testss/test7.html',
      chunks: ['test7', 'index'] // добавляем ко всем html, которые у нас были до это пары
    }),

    new HtmlWebpackPlugin({
      template: './src/testss/test8.html',
      filename: './testss/test8.html',
      chunks: ['test8', 'index'] // добавляем ко всем html, которые у нас были до это пары
    }),

    new HtmlWebpackPlugin({
      template: './src/testss/test9.html',
      filename: './testss/test9.html',
      chunks: ['test9', 'index'] // добавляем ко всем html, которые у нас были до это пары
    }),

    new HtmlWebpackPlugin({
      template: './src/testss/test10.html',
      filename: './testss/test10.html',
      chunks: ['test10', 'index'] // добавляем ко всем html, которые у нас были до это пары
    }),

    new HtmlWebpackPlugin({
      template: './src/testss/test11.html',
      filename: './testss/test11.html',
      chunks: ['test11', 'index'] // добавляем ко всем html, которые у нас были до это пары
    }),

    new HtmlWebpackPlugin({
      template: './src/testss/test12.html',
      filename: './testss/test12.html',
      chunks: ['test12', 'index'] // добавляем ко всем html, которые у нас были до это пары
    }),

    new HtmlWebpackPlugin({
      template: './src/testss/test13.html',
      filename: './testss/test13.html',
      chunks: ['test13', 'index'] // добавляем ко всем html, которые у нас были до это пары
    }),

    // new HtmlWebpackPlugin({
    //   template: './src/testss/test14.html',
    //   filename: './testss/test14.html',
    //   chunks: ['test14', 'index'] // добавляем ко всем html, которые у нас были до это пары
    // }),

    // new HtmlWebpackPlugin({
    //   template: './src/testss/test15.html',
    //   filename: './testss/test15.html',
    //   chunks: ['test15', 'index'] // добавляем ко всем html, которые у нас были до это пары
    // }),

    // new HtmlWebpackPlugin({
    //   template: './src/testss/test16.html',
    //   filename: './testss/test16.html',
    //   chunks: ['test16', 'index'] // добавляем ко всем html, которые у нас были до это пары
    // }),

    new HtmlWebpackPlugin({
      template: './src/testss/test-usi.html',
      filename: './testss/test-usi.html',
      chunks: ['test', 'index'] // добавляем ко всем html, которые у нас были до это пары
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

    // Card Krug
    new HtmlWebpackPlugin({
      template: './src/cards/krug.html',
      filename: './cards/krug.html',
      chunks: ['block', 'index']
    }),

    // Card Svech
    new HtmlWebpackPlugin({
      template: './src/cards/svech.html',
      filename: './cards/svech.html',
      chunks: ['block', 'index']
    }),

    // Card Derevo
    new HtmlWebpackPlugin({
      template: './src/cards/derevo.html',
      filename: './cards/derevo.html',
      chunks: ['block', 'index']
    }),

    // Card kolco
    new HtmlWebpackPlugin({
      template: './src/cards/kolco.html',
      filename: './cards/kolco.html',
      chunks: ['block', 'index']
    }),

    // Card demo
    new HtmlWebpackPlugin({
      template: './src/cards/demo.html',
      filename: './cards/demo.html',
      chunks: ['block', 'index']
    }),

    // Card Obl
    new HtmlWebpackPlugin({
      template: './src/cards/obl.html',
      filename: './cards/obl.html',
      chunks: ['block', 'index']
    }),

    // Card Stolb
    new HtmlWebpackPlugin({
      template: './src/cards/stolb.html',
      filename: './cards/stolb.html',
      chunks: ['block', 'index']
    }),

    // Card Usi
    new HtmlWebpackPlugin({
      template: './src/cards/usi.html',
      filename: './cards/usi.html',
      chunks: ['block', 'index']
    }),
    // Card Linear
    new HtmlWebpackPlugin({
      template: './src/cards/linear.html',
      filename: './cards/linear.html',
      chunks: ['block', 'index']
    }),

    // Card block
    new HtmlWebpackPlugin({
      template: './src/cards/block.html',
      filename: './cards/block.html',
      chunks: ['block', 'index']
    }),

    // Card matrica
    new HtmlWebpackPlugin({
      template: './src/cards/matrica.html',
      filename: './cards/matrica.html',
      chunks: ['block', 'index']
    }),

    // Card calend
    new HtmlWebpackPlugin({
      template: './src/cards/calend.html',
      filename: './cards/calend.html',
      chunks: ['block', 'index']
    }),

    // Card pusyr
    new HtmlWebpackPlugin({
      template: './src/cards/pusyr.html',
      filename: './cards/pusyr.html',
      chunks: ['block', 'index']
    }),

    // Card plotn
    new HtmlWebpackPlugin({
      template: './src/cards/plotn.html',
      filename: './cards/plotn.html',
      chunks: ['block', 'index']
    }),

    // Card hord
    new HtmlWebpackPlugin({
      template: './src/cards/hord.html',
      filename: './cards/hord.html',
      chunks: ['block', 'index']
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
