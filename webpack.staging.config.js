const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const express = require('express');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {
    return {
        entry: {
            index: ['./client/src/index.js', './client/src/scss/index.scss']
        },
        output: {
            path: path.join(__dirname, '/client/dist'),
            publicPath: '/',
            filename: '[name].js'
        },
        optimization: {
            minimize: false
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.(png|jpg|jpeg|gif|ttf|ico)$/,
                    use: ['url-loader']
                },
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: miniCssExtractPlugin.loader,
                            options: {
                                name: '[name].css'
                            }
                        },
                        'css-loader',
                        {
                            loader: 'sass-loader'
                        }
                    ],

                },
                {
                    test: /\.svg$/,
                    use: [ 'raw-loader' ]
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: 'style-loader'
                        },
                        {
                            loader: 'postcss-loader'
                        },
                    ]
                }
            ]
        },
        devServer: {
            port: 3000,
            open: true,
            host: '0.0.0.0',
            proxy: {
                '/api': {
                    target: 'http://localhost',
                    secure: false
                }
            },
            historyApiFallback: {
                rewrites: [
                    {from: /^\/.*/, to: '/index.html'},
                ]
            },
            setup (app) {
                app.use('/images', express.static(path.join(__dirname, '/client/assets/images')));
                app.use('/fonts', express.static(path.join(__dirname, '/client/assets/fonts')));
            }
        },
        plugins: [
            new htmlWebpackPlugin({
                template: './client/public/index.html',
                filename: 'index.html',
                chunks: ['index']
            }),
            new miniCssExtractPlugin({
                filename: 'css/[name].css',
                chunkFilename: '[name].css'
            }),
        ]
    }
}