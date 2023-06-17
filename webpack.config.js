const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer');

module.exports = {
    entry: './src/index.js',
    // 
    /*
    Code Splitting
    entry: {
        foo: 'foo.js',
        bar: 'bar.js',
    }
    */
    /**/
    /**/
    output: {
        filename: 'awesome.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: { 
        // RULES: match files to loaders
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    // PLUGINS: tap into the bundler lifecycle
    plugins: [
        new BundleAnalyzerPlugin(),
    ],
    // DEV SERVER: watch and serve my files
    devServer: {
        publicPath: '/dist',
        contentBase: path.join(__dirname, 'public'),
        port: 9000
    },
};