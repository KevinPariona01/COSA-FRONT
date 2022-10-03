const { merge } = require('webpack-merge');
const common = require('./webpack.config');
const {RetryChunkLoadPlugin} = require("webpack-retry-chunk-load-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const zlib = require("zlib");

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new RetryChunkLoadPlugin({
      // optional value to set the amount of time in milliseconds before trying to load the chunk again. Default is 0
      retryDelay: 10,
      // optional value to set the maximum number of retries to load the chunk. Default is 1
      maxRetries: 5,
    }),
    new CompressionPlugin({
      filename: "[path][base].gz",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      exclude: /^.*(xs-angular-common).*$/,
      compressionOptions: { level: zlib.constants.Z_MAX_LEVEL },
      minRatio: 0.8,
    }),
    new CompressionPlugin({
      filename: "[path][base].br",
      algorithm: "brotliCompress",
      exclude: /^.*(xs-angular-common).*$/,
      test: /\.(js|css|html|svg)$/,
      compressionOptions: {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: zlib.constants.BROTLI_MAX_QUALITY,
          [zlib.constants.BROTLI_PARAM_MODE]: zlib.constants.BROTLI_MODE_TEXT,
        },
      },
      minRatio: 0.8,
    }),
  ]
});
