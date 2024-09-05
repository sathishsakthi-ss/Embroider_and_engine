'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    // Add options here
  });

  // const webpackConfig = {
  //   module: {
  //     rules: [
  //       {
  //         test: /\.scss$/,
  //         type: 'asset/resource',
  //         use: [
  //           MiniCssExtractPlugin.loader,
  //           {
  //             loader: 'sass-loader',
  //             options: {
  //               implementation: require('sass'),
  //             },
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   plugins: [
  //     new MiniCssExtractPlugin({
  //       filename: "[name].css",
  //       chunkFilename: "[id].css",
  //     }),
  //   ],
  // };

  const { Webpack } = require('@embroider/webpack');
  return require('@embroider/compat').compatBuild(app, Webpack, {
    staticAddonTestSupportTrees: true,
    staticAddonTrees: true,
    staticHelpers: true,
    staticModifiers: true,
    staticComponents: true,
    splitAtRoutes: [
      'booked-tickets',
      'booking-page',
      'booking-page.book-now',
    ]
    // packagerOptions: {
    //   webpackConfig : webpackConfig,
    // },

  });
  // return app.toTree();
};
