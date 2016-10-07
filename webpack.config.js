const NODE_ENV = process.env.NODE_ENV || 'dev';
const webpack = require('webpack');

module.exports = {
	entry: __dirname + "/home",

	output: {
		filename: __dirname + "/build.js",
		library: 'home'
	},

	watch: NODE_ENV === 'dev',

	watchOptions: {
		aggregateTimeout: 100
	},

	devtool: NODE_ENV === 'dev' ? 'cheep-inline-module-source-map' : null,

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015','stage-0']
				}
			}/*,
			{
				test: '/\.(png|jpg|gif)$/',
				loader: 'file?name=[name].[ext]'
			}*/
		]
	},

	plugins: [
		new webpack.EnvironmentPlugin('NODE_ENV')
	]
};
