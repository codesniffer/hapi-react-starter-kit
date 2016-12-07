 var CopyWebpackPlugin = require('copy-webpack-plugin');
 var path = require('path');


 module.exports = {
     entry: './src/server.js',
     output: {
         path: './dist',
         filename: 'server.bundle.js'
     },
     module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
         }, 
         { 	 
         	test: /\.html$/, 
         	include: [
       		 	path.resolve(__dirname, "src/view")
      		],
      		loader: "file" 
         }]
     }, 
     plugins: [
        new CopyWebpackPlugin([ { from: 'src/view/'}])
     ]
 };