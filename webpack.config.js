const path = require('path');

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
};