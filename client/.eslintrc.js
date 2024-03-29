module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "airbnb"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "tsconfigRootDir": "",
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "react-hooks"
    ],
    "rules": {
        "function-paren-newline": ["error", "consistent"],
        "@typescript-eslint/no-use-before-define": ["error"],
        "react/jsx-filename-extension": ["warn", {"extensions": [".tsx"]}],
        "@typescript-eslint/no-shadow": ["error"],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "max-len": ["warn", { "code": 200 }],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "ts": "never",
                "tsx": "never"
            }
        ],
        "no-shadow": "off",
        "no-undef": "off",
        "linebreak-style": "off",
        "no-use-before-define": "off",
        "import/prefer-default-export": "off",
        "react/prop-types": "off",
        "react/jsx-props-no-spreading": "off",
        "@typescript-eslint/no-empty-function": "off",
        "import/no-extraneous-dependencies": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["warn", { "ignoreRestSiblings": true }],
        "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
        "no-param-reassign": ["error", { "props": true, "ignorePropertyModificationsFor": ["state"] }],
        "react/function-component-definition": [
            2,
            {
                "namedComponents": "arrow-function",
                "unnamedComponents": "arrow-function"
            }
        ]
    },
    "settings": {
        "import/resolver": {
            "typescript": {}
        }
    }
}
