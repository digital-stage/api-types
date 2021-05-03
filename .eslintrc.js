module.exports = {
    "extends": [
        'airbnb-typescript',
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
