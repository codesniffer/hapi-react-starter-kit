var path = require('path');


var config = {
  context: path.join(__dirname, 'src/ui'),
  entry: {
    javascript: './main.js',
    html: './index.html'
  },
  output: {
    path: path.join(__dirname, 'dist/public'),
    filename: 'bundle.js'
  },
  devServer: {
      inline: true,
      port: 8080,
      historyApiFallback: true,
      stats: {
        colors: true,
        hash: false,
        version: false,
        timings: false,
        assets: false,
        chunks: false,
        modules: false,
        reasons: false,
        children: false,
        source: false,
        errors: true,
        errorDetails: true,
        warnings: true      
      }
   },
	
   module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            presets: ['es2015', 'react']
          }
        },
        { 
          test: /\.html$/, loader: 'file?name=[name].[ext]' 
        },  
        { 
          test: /\.css$/, loader: "style-loader!css-loader" 
         }
      ]
   }
}

module.exports = config;


/*var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
   entry: './src/server.js',
   output: {
   path: './dist',
   filename: 'server.bundle.js'
 },
 target: "node",
 module: {
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
     }, 
     {    
      test: /\.html$/, 
      include: [path.resolve(__dirname, "src/view")],
      loader: "file" 
     },
     { test: /\.json$/, loader: 'json-loader' }
     ]
 },
 node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }, 
 plugins: [
    new CopyWebpackPlugin([ { from: 'src/view/', to: 'view'}])
 ]
};*/