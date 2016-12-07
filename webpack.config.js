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
         }]
     }
 };