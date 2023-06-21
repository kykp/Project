module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:i18next/recommended'
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [
                '.eslintrc.{js,cjs}',
            ],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        "i18next"
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'indent': [2,4],
        'react/jsx-filename-extension':
            [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        "react/react-in-jsx-scope": 0,
        "react/jsx-uses-react": 0,
        "import/no-unresolved": 0,
        "import/prefer-default-export": 0,
        "no-unused-vars": 1,
        "react/require-default-props": 0,
        'react/jsx-props-no-spreading': 1,
        'react/function-component-definition': 0,
        "no-shadow": "off",
        "import/extensions": "off",
        "i18next/no-literal-string": ['error', {markupOnly: true}],
        "max-len": ['error', {"ignoreComments": true}]
    },
    globals: {
        "__IS_DEV__": true,
        "__dirname": true
    }
};
