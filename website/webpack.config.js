const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
	{
		entry: './src/index.js',
		output: {
			filename: 'bundle.js',
			path: path.join(__dirname, 'dist/site')
		},
		plugins: [
			new HtmlWebpackPlugin({
				hash: true,
				template: './src/index.html',
				filename: './index.html'
			})
		],

		module: {
			rules: [
				{
					test: /.js$/,
					exclude: /(node_modules)/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['env']
						}
					}
				},
				{
					test: /\.css$/,
					use: [
						{loader: 'style-loader'},
						{loader: 'css-loader'}
					]
				},
				{
					test: /\.scss$/,
					use: [
						{loader: 'style-loader'},
						{loader: 'css-loader'},
						{loader: 'sass-loader'}
					]
				},
				{
					test: /\.(png|jp(e*)g|svg)$/,
					use: [{
						loader: 'url-loader',
						options: {
							limit: 8000, // Convert images < 8kb to base64 strings
							name: 'images/[hash]-[name].[ext]'
						}
					}]
				},
				{
					test: /\.(woff|woff2)$/,
					loader: 'url-loader?limit=100000'
				}
			]
		}
	},
	{
		entry: './src/index-blog.js',
		output: {
			filename: 'bundle.js',
			path: path.join(__dirname, 'dist/blog')
		},
		plugins: [
			new HtmlWebpackPlugin({
				hash: true,
				template: './src/blog.html',
				filename: './index.html'
			})
		],

		module: {
			rules: [
				{
					test: /.js$/,
					exclude: /(node_modules)/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['env']
						}
					}
				},
				{
					test: /\.css$/,
					use: [
						{loader: 'style-loader'},
						{loader: 'css-loader'}
					]
				},
				{
					test: /\.scss$/,
					use: [
						{loader: 'style-loader'},
						{loader: 'css-loader'},
						{loader: 'sass-loader'}
					]
				},
				{
					test: /\.(png|jp(e*)g|svg)$/,
					use: [{
						loader: 'url-loader',
						options: {
							limit: 8000, // Convert images < 8kb to base64 strings
							name: 'images/[hash]-[name].[ext]'
						}
					}]
				},
				{
					test: /\.(woff|woff2)$/,
					loader: 'url-loader?limit=100000'
				}
			]
		}
	}
];
