const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
				include: [
					path.resolve(__dirname, "src"),
					path.resolve(__dirname, "node_modules/animate.css"),
					path.resolve(__dirname, "node_modules/aos/dist"),
				],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				use: [
					{
						loader: "url-loader",
						options: {
							limit: 8192, // Convert images < 8kb to base64 strings
							name: "images/[name].[hash:7].[ext]",
						},
					},
				],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "fonts/[name].[hash:7].[ext]",
						},
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "index.html",
		}),
		new MiniCssExtractPlugin({
			filename: "styles/[name].css",
		}),
		new webpack.HotModuleReplacementPlugin(),
	],
	devServer: {
		static: {
			directory: path.join(__dirname, "dist"),
		},
		compress: true,
		port: 8081,
		open: true,
		hot: true,
		client: {
			logging: "info",
			overlay: true,
			reconnect: true,
		},
	},
	resolve: {
		extensions: [".js", ".jsx", ".json"],
		modules: [path.resolve(__dirname, "node_modules")],
	},
	devtool: "inline-source-map",
};
