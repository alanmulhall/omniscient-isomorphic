//Based on
//https://github.com/jcranendonk/todomvc-omniscient
module.exports = {
    entry: './client/src/js/index',
    output: {
        path: __dirname + '/build',
        publicPath: '/',
        filename: 'js/app.js'
    },
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules\//,
            loader: '6to5?experimental'
        }, {
            test: /\.png$/,
            loader: 'file?name=img/[hash].[ext]'
        }]
    }
};
