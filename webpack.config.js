const path = require('path');
const HtmtlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCSS = new ExtractTextPlugin('./styles/style.css');

module.exports = {
  mode: 'none',
  entry: path.join(__dirname, './source/index.js'),
  output: {
    filename: './js/match-match-game.js',
    path: path.join(__dirname, 'build')
  },
  plugins: [
		new CleanWebpackPlugin(['build']),
		new HtmtlWebpackPlugin({
			template: './source/index.html'
    }),
    extractCSS
	],
	module: {
		rules: [
			{
        test: /\.css$/,
        use: extractCSS.extract([ 
          'css-loader' 
        ])
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          'file-loader?name=images/[name].[ext]'
        ]
      }
		]
	}
};