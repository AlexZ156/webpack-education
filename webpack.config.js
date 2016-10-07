const NODE_ENV = process.env.NODE_ENV || 'dev';
const webpack = require('webpack');

module.exports = {
	context: __dirname + '/dev',

	entry: {
		home: "./home",
		about: "./about"
	},

	output: {
		path: __dirname + '/build',
		filename: '[name].js',
		library: '[name]'
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
					presets: ['es2015','stage-0'],
					plugins: ['transform-runtime']
				}
			}/*,
			{
				test: '/\.(png|jpg|gif)$/',
				loader: 'file?name=[name].[ext]'
			}*/
		]
	},

	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.EnvironmentPlugin('NODE_ENV')
	],

	resolve: {
		modulesDirectories: ['node_modules'],
		extensions: ['', '.js']
	},

	resolveLoader: {
		modulesDirectories: ['node_modules'],
		moduleTemplates: ['*-loader', '*'],
		extensions: ['', '.js']
	}
};
