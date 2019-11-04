const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const vConsolePlugin = require('vconsole-webpack-plugin');

module.exports = {
	entry: {
		'js/bundle': './src/App.jsx'
	},
	output: {
		filename: '[name].js?[contenthash]',
		path: __dirname + '/dist',
		publicPath: '/'
	},
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: [
						['@babel/preset-env', { targets: { ios: 11, android: 9 } }],
						'@babel/preset-react'
					],
					plugins: [
						['import', { libraryName: 'antd-mobile', style: true }]
					]
				}
			}
		}, {
			test: /\.(le|c)ss$/,
			use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader?javascriptEnabled=1']
		}]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/style.css?[contenthash]'
		}),
		new OptimizeCssAssetsPlugin({
			cssProcessorPluginOptions: {
				preset: ['default', { discardComments: { removeAll: true } }]
			}
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new vConsolePlugin({
			enable: true
		})
	],
	devServer: {
		host: '0.0.0.0'
	}
};
