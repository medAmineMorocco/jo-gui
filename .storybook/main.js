const path = require('path');

module.exports = {
    stories: ['./stories/*.stories.js'],
    addons: ['@storybook/addon-knobs/register',
        '@storybook/addon-viewport/register',
        '@storybook/addon-actions/register'],
    webpackFinal: async (config, { configType }) => {

        config.resolve.alias= {
            '@pages': path.resolve(__dirname, '../src/pages/'),
            '@components': path.resolve(__dirname, '../src/components/'),
            '@services': path.resolve(__dirname, '../src/services/'),
            '@hooks': path.resolve(__dirname, '../src/hooks/'),
            '@utils': path.resolve(__dirname, '../src/utils/'),
            '@theme': path.resolve(__dirname, '../src/theme/')
        };


        return config;
    },
};