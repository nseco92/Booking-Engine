module.exports = {

    //define entry point
    entry: './src/sassLoader.js',

    //define output point
    output: {
        path: 'dist',
        filename: 'bundle.js'
    },

     module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,/\.sass$/,
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
              test: /\.sass$/,
              include: paths.appSrc,
              loaders: ['style', 'css', 'sass']
            }
        ] //loaders
    } //module

};