const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
	mode: 'development',
	entry: {
		polyfills: path.resolve(__dirname, './src/polyfills.js'),
		index: path.resolve(__dirname, './src/index.jsx'),
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: "[name].bundle.js"
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './src/index.html')
		}),
		new webpack.DefinePlugin({
			SERVER_URL: JSON.stringify('http://localhost:8080')
		})
	],
	resolve: {
		extensions: ['.jsx', '.js']
	},
	module: {
		rules: [
			{
				test: /\.js(x)/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.(scss|sass)/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			}
		]
	},
	devServer: {
		contentBase: path.resolve(__dirname, './dist'),
		port: 5000
	}
}
