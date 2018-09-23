const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin');
// const isProduction = (process.env.NODE_ENV === 'production');
var isProduction = "dev";

module.exports = {
	
	//Базовый путь к проекту
	context: path.resolve(__dirname, 'src'),
	//Точки входа
	entry: {
		app: [
			'./js/app.js',
			'./scss/style.scss'
		],
	},
	//путь для собранных файлов
	output: {
		filename: 'js/[name].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '../'
	},
	devServer: {
		contentBase: path.join(__dirname, 'app'),
		compress: true,
		port: 9000
	},
	devtool: (isProduction) ? '' : 'source-map',
	module: {
		rules: [
			{
			  test: /\.(sa|sc|c)ss$/,
			  use: ExtractTextPlugin.extract({
				use: [
					{
						loader: 'css-loader',
						options: {sourceMap: true}
					},
					{
						loader: 'sass-loader',
						options: {sourceMap: true}
					},
				  ],
				  fallback: 'style-loader',
			  })			 
			},
		  ],
	},
	plugins: [
		new ExtractTextPlugin(
			'./css/[name].css'
			),
	  ],
}
