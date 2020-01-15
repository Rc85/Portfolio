const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
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
            minimize: true
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
                    use: ['url-loader?name=[name].[ext]']
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
        plugins: [
            new htmlWebpackPlugin({
                template: './client/public/index.html',
                filename: 'index.html',
                favicon: './client/public/favicon.ico',
                chunks: ['index']
            }),
            new miniCssExtractPlugin({
                filename: 'css/[name].css',
                chunkFilename: '[name].css'
            })
        ]
    }
}