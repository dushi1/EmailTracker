const commonPaths = require('./common-paths');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = {
    mode: 'production',
    entry: {
        app: [`${commonPaths.appEntry}/index.tsx`],
    },
    output: {
        filename: 'static/[name].[fullhash].js',
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: true,
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            sourceMap: true,
                            esModule: true,
                            modules: {
                                mode: 'local',
                                exportLocalsConvention: 'camelCaseOnly',
                                namedExport: true,
                            },
                        },
                    },
                    {
                        loader: 'postcss-loader',
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles/[name].[fullhash].css',
        }),
    ],
};
module.exports = config;