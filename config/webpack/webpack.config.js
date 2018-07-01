const CopyPlugin = require('copy-webpack-plugin');
const DotenvPlugin = require('dotenv-webpack');
const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');

const SRC = path.resolve(__dirname, '../../src');
const PUBLIC = path.resolve(__dirname, '../../public');
const DIST = path.resolve(__dirname, '../../dist');

module.exports = {
    entry: `${SRC}/index.tsx`,
    devtool: 'source-map',
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            '@app': SRC,
            '@assets': `${PUBLIC}/assets`,
        },
    },
    output: {
        filename: 'js/bundle.js',
        path: DIST,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'awesome-typescript-loader',
            },
            {
                test: /\.png$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            name: 'img/[name].[ext]',
                        },
                    }
                ]
            },
        ],
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
    },
    plugins: [
        new CopyPlugin([
            {from: `${PUBLIC}/favicon.ico`, to: `${DIST}/favicon.ico`}
        ]),
        new DotenvPlugin(),
        new HtmlPlugin({
            template: `${PUBLIC}/index.html`,
            inject: false
        }),
    ]
};