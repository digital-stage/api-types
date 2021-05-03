module.exports = {
    "extends": [
        'airbnb-typescript',
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:promise/recommended",
        "plugin:prettier/recommended"
    ],
    "rules": {
        "no-underscore-dangle": 0
    },
    "parserOptions": {
        "project": './tsconfig.json'
    }
}
