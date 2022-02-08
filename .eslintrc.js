const config = {
    parser: 'babel-eslint',
    extends: ['@magento'],
    rules: {
        'no-prototype-builtins': 'off',
        'no-undef': 'off',
        'no-useless-escape': 'off',
        'object-curly-spacing': ['error', 'always']
    },
    overrides: [
        {
            files: ['*.{ts,tsx}'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint'],
            extends: ['plugin:@typescript-eslint/recommended'],
            rules: {
                '@typescript-eslint/ban-ts-comment': 'off'
            }
        }
    ]
};

module.exports = config;
