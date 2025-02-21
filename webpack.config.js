const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.css$/i, // Добавить правило для обработки обычных CSS
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader', // Загружать обычные CSS
                ],
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext][query]',
                },
            },
            {
                test: /\.(svg|png|jpg|jpeg|webp)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/[name][ext][query]',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'src/img',
                    to: 'img',
                },
            ],
        }),
    ],
};


