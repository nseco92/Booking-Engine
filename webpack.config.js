module.exports = {

    //define entry point
    entry: './src/sassLoader.js',

    //define output point
    output: {
        path: 'dist',
        filename: 'bundle.js'
    },

     module: {
         rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }],
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,/\.sass$/,/\.scss$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
              {
  test: /\.scss$/,
  include: paths.appSrc,
  loaders: ["style", "css", "sass"]
},
            }
        ] //loaders
    } //module

};