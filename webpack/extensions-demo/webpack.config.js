const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.css', '.json', '...']
    },
    devServer: {
        static: './dist',
        compress: true,
        historyApiFallback: true,
        hot: true,
        port: 8000,
        proxy: {},
        open: true,
        https: false,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html"
        })
    ],
    optimization: {
        nodeEnv: 'development'
    }
};