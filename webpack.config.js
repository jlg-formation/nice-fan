const path = require('path');
// const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		bundle: './app/main.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, './app/wpk')
	},
	module: {
		rules: [{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [{
					loader: 'ng-annotate-loader'
				}, {
					loader: 'babel-loader'
				}]
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader?minimize&sourceMap'
				})
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader?minimize&sourceMap!sass-loader?sourceMap'
				})
			},
			{
				test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
				use: {
					loader: 'url-loader?limit=10000&mimetype=application/font-woff'
				}
				
			},
			{
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				use: {
					loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
				}
			},
			{
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				use: {
					loader: 'file-loader'
				}
			},
			{
				test: /fontawesome-webfont\.svg(\?v=\d+\.\d+\.\d+)?$/,
				use: {
					loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
				}
			},
			{
				test: /\.html$/,
				use: [{
					loader: 'ngtemplate-loader',
					options: {
						relativeTo: 'app'
					}
				}, {
					loader: 'html-loader',
					options: {
						attrs: 'img-svg:src',
						root: path.resolve('./app')
					}
				}]
			}
		]
	},
	devtool: 'source-map',
	plugins: [
		new ExtractTextPlugin('[name].css'),
		// new webpack.optimize.UglifyJsPlugin({
		// 	sourceMap: true,
		// 	compress: {
		// 		warnings: false
		// 	},
		// 	output: {
		// 		comments: false,
		// 	}
		// })
	]
};
