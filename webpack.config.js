// Generated using webpack-cli https://github.com/webpack/webpack-cli

const webpack = require('webpack')
const path = require("path");
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = MiniCssExtractPlugin.loader;

const package = require('./package.json')

const config = {
  entry: {
    'app': './src/index.ts',
    'example/typescript/x-typescript': './src/example/typescript/x-typescript.ts',
    'example/typescript/y-typescript': './src/example/typescript/y-typescript.ts',
    'example/vanilla/x-vanilla': './src/example/vanilla/x-vanilla.js',
    'example/vanilla/y-vanilla': './src/example/vanilla/y-vanilla.js',
    'example/svg/exampleSvg': './src/example/svg/exampleSvg.ts',
    'scroll-parallax-effect/scroll-parallax-effect': './src/scroll-parallax-effect/index.ts',
    'scroll-parallax-effect/scroll-parallax-effect.min': './src/scroll-parallax-effect/index.ts',
    'scroll-parallax-effect/index': './src/scroll-parallax-effect/index.ts',
    'scroll-parallax-effect/timing': './src/scroll-parallax-effect/timing.ts',
    'scroll-parallax-effect/speed': './src/scroll-parallax-effect/speed.ts',
    'scroll-parallax-effect/fit': './src/scroll-parallax-effect/fit.ts',
    'scroll-parallax-effect/svg': './src/scroll-parallax-effect/svg.ts',
    'scroll-parallax-effect/vue': './src/scroll-parallax-effect/vue.ts',
    'scroll-parallax-effect/index': './src/scroll-parallax-effect/index.ts',
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: isProduction ? '/scroll-parallax-effect/dist/' : '/',
    filename: '[name].js',
    library: "scroll-parallax-effect",
    libraryTarget: "umd"
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),

    // typescript
    new HtmlWebpackPlugin({
      template: "public/example/typescript/x-typescript.html",
      filename: 'example/typescript/x-typescript.html',
      chunks: ['example/typescript/x-typescript']
    }),
    new HtmlWebpackPlugin({
      template: "public/example/typescript/y-typescript.html",
      filename: 'example/typescript/y-typescript.html',
      chunks: ['example/typescript/y-typescript']
    }),

    // vanilla
    new HtmlWebpackPlugin({
      template: "public/example/vanilla/x-vanilla.html",
      filename: 'example/vanilla/x-vanilla.html',
      chunks: ['example/vanilla/x-vanilla']
    }),
    new HtmlWebpackPlugin({
      template: "public/example/vanilla/y-vanilla.html",
      filename: 'example/vanilla/y-vanilla.html',
      chunks: ['example/vanilla/y-vanilla']
    }),

    // svg
    new HtmlWebpackPlugin({
      template: "public/example/svg/svg.html",
      filename: 'example/svg/svg.html',
      chunks: ['example/svg/exampleSvg']
    }),

    new CopyPlugin({
      patterns: [
        { from: 'public/example/img', to: 'example/img' },
      ],
    }),

    new MiniCssExtractPlugin(),

    new webpack.BannerPlugin({
      banner: `${package.name}
${package.description}
${package.repository.url}
@version ${package.version}
@license Released under ${package.license} license
@author ${package.author.name}`,
      test: /^(?=.*js)(?!.*min).*$/
    }),
    new webpack.BannerPlugin({
      banner: `${package.name}|${package.repository.url}|${package.version}|${package.license} license|${package.author.name}`,
      test: /\.min.js(\?.*)?$/i
    }),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: [
          stylesHandler,
          {
            loader: 'css-loader', 
            options: {
              importLoaders: 1,
              url: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      stage: 0
                    },
                  ],
                ],
              },
            }
          }
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        test: /\.min.js(\?.*)?$/i,
      }),
    ],
  },
  externals: {
    vue: 'vue',
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
