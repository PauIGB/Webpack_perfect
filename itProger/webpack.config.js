const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
	entry: {main: './src/index.js'},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js'
	},
	module: {
		rules: [
			{
				test:/\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				},
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
			}
		
		],
	},
	plugins: [
		new CleanWebpackPlugin('dist', {}),
		new MiniCssExtractPlugin({filename: 'style.css'}),
		new HtmlWebpackPlugin ({
			inject: false,
			hash: true,
			template: './src/index.html',
			filename: 'index.html'
		})
	]
}

