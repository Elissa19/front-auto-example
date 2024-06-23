module.exports = {
    parser: "@typescript-eslint/parser",
    extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
    plugins: ['@typescript-eslint/eslint-plugin', 'prettier'],
    rules: {
        'prefer-const': 'warn',
        '@typescript-eslint/no-explicit-any': 'war',
        'require-await': 'warn',
    },
};