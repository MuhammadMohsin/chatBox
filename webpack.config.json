const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './web/dist/index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
    entry: './index.web.js',
    output: {
        path: path.resolve('web/dist'),
        filename: 'index_bundle.js'
    },
     module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', query: { presets: ['es2015', 'react'] }, exclude: /node_modules/ },
      { test: /\.jsx?$/, loader: 'babel-loader', query: { presets: ['es2015', 'react'] }, exclude: /node_modules/ }
    ]
  },
    stats: {
        colors: true
    },
    devtool: 'source-map',
    plugins: [HtmlWebpackPluginConfig]

}