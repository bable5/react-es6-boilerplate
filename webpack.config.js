const webpack = require('webpack');
const path = require('path');
const HWP = require('html-webpack-plugin');

module.exports = {
    entry: './src',
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HWP(
            {template: path.join(__dirname, '/dev-server/index.html')}
        )
    ],
    devServer: {
        contentBase: path.join(__dirname, '/dist'),
        hot: true
    }
};

