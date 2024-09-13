const path = require("path")
const HtmlPlugin = require("html-webpack-plugin")
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, "src/index.tsx")
    },
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        port: 5001,
        open: true,
        hot: true,
    },
    module: {
        rules: [
            {
                use: "ts-loader",
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/
            },
            {
                use: ['style-loader','css-loader', 'sass-loader'],
                test: /\.(s(a|c)ss)$/
            },
            {
                type: "asset/resource",
                test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    plugins: [
        new HtmlPlugin({
            title: "GameVilla",
            filename: "index.html"
        })
    ],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].bundle.js",
        clean: true
    },
    optimization: {
        splitChunks: {
            chunks: "all",
        }
    }
}