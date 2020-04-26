var path = require('path');
const webpack = require('webpack')
const {VueLoaderPlugin} = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack');
require("babel-polyfill");

module.exports = {
    mode: 'development',
    entry: {
		'desktop': './src/desktop/index.js',
		'mobile': './src/mobile/index.js',
	},
	output: {
		filename: '[name]/bundle.js',
		chunkFilename: 'chunk.[hash].js',
		path: path.resolve(__dirname, '../server/public/')
	},
	devServer: { writeToDisk: true },
	//   devServer: {
	// 	contentBase: path.join(__dirname, '../server/public/'),
    // },
    module: {
        rules: [
			{
				test: /\.vue$/,
				use: 'vue-loader'
			},
			{
				exclude: /(node_modules)/,//excluded node_modules
				test: /\.js$/,
				use: 'babel-loader'
			},
			{
				test:/\.css$/,
				use:['style-loader','css-loader']
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
	optimization: {
		splitChunks: {
			name: 'desktop/index',
			minChunks: 2
		}
	},
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
		new VueLoaderPlugin(),
        // new HtmlWebpackPlugin({
        //     template: './index.html',
        //     filename: 'desktop/index.html',
        //     inject: true
		// }),
        // new HtmlWebpackPlugin({
        //     template: './index.html',
        //     filename: 'mobile/index.html',
        //     inject: true
		// })

		// new Dotenv({})
		// new webpack.DefinePlugin({
		// 	'process.env': {
		// 		'APIURL': JSON.stringify(process.env.APIURL)
		// 	}
		// })
    ]
}