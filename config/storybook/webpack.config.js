const path = require('path');

const SRC = path.resolve(__dirname, '../../src');
const STORIES = path.resolve(__dirname, '../../stories');

module.exports = (baseConfig, env, config) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        loader: require.resolve('awesome-typescript-loader'),
    });
    config.resolve.extensions.push('.ts', '.tsx');
    config.resolve.alias = {'@app': SRC, '@stories': STORIES};

    return config;
};