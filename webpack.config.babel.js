import path from 'path';
import config from 'config';
import webpack from 'webpack';

export default {
    target: 'node',
    entry: path.join(__dirname, 'lib/index.js'),
    output: {
        path: './build/',
        publicPath: '/',
        filename: 'index.js',
        libraryTarget: 'commonjs', // Ensure we have exports.handler
    },
    plugins: [
        new webpack.DefinePlugin({ config: JSON.stringify(config) }),
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: path.resolve(__dirname, 'node_modules'),
            loader: 'babel',
        }, {
            test: /\.json$/,
            loader: 'json-loader',
        }],
    },
};