module.exports = {
    /* Настройка глобального окружения */
    env: {
        browser: true,
        es6: true,
    },

    /* Расширение конфига дефолтными конфигами из npm */
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'prettier',
    ],

    /* Перенастройка конфига для конкретных файлов */
    // overrides: [
    //   {
    //     files: ['src/**/*.js'],
    //     rules: {},
    //   },
    // ],

    /* Настройка парсера */
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 'latest',
        sourceType: 'module',
    },

    /* Плагины (расширяют возможности eslint) */
    plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier', 'jsx-a11y'],

    /* Правила */
    rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        'jsx-a11y/no-autofocus': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        'arrow-body-style': ['error', 'as-needed'],
    },
};
