const path = require('path'),
    HtmlWebPackPlugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'project.bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    mode: 'development',
    devtool: 'inline-source-map',
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    module : {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.css|\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader'
                    }
                ]                 
            },
            {
                test: /\.(png|svg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src', 'Assets/Images'),
                    to: 'assets/images'
                }
            ]
        })
    ],
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 3006,
        open: true
    }
}