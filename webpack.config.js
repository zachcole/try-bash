var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: [
		'./app/index.js'
	],
	output: {
		path: __dirname + '/dist',
		filename: "index_bundle.js"
	},
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
			{test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader?name=/public/icons/[name].[ext]"},
		]
	},
	plugins: [HtmlWebpackPluginConfig]
};