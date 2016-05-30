module.exports = {
    entry: './src',
    output: {
        path:     'builds',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            include: __dirname + '/src',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
};

