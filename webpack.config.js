const webpack = require("webpack");
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: {
       home: path.resolve(__dirname, './src/index.js'),
    },
    mode: 'development',
    devServer: {
    contentBase: './dist',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                loader: 'babel-loader'
                }
            }, 
            {
                test: /\.html$/,
                use: {
                loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }, 
            {
				test: /\.(png|jp(e*)g|svg)$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 8000, // Convert images < 8kb to base64 strings
						name: 'images/[hash]-[name].[ext]',
						esModule: false,
					}
				}]
			},
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jQuery',
            jQuery: 'jQuery'
        }),
        new Dotenv({}),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname,"./src/index.html")
        }), 
        new VueLoaderPlugin()
    ],
}