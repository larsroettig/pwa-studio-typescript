module.exports = {
    presets: ['@magento/peregrine', '@babel/preset-typescript'],
    plugins: [
        '@babel/plugin-proposal-nullish-coalescing-operator',
        '@babel/plugin-proposal-optional-chaining'
    ]
};
