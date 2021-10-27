const commonPaths = require('./common-paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
const config = {
    output: {
        path: commonPaths.outputPath,
        publicPath: './',
    },
    stats: {
        errors: true,
        errorDetails: true,
    },
    target: 'web',
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'initial',
                    test: /[\\/]node_modules[\\/]react-bootstrap([\S]+)[\\/]/,
                    name: 'vendor',
                    enforce: true,
                },
            },
        },
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `public/index.html`,
            // favicon: `public/favicon.ico`,
        }),

    ],
};
module.exports = config;