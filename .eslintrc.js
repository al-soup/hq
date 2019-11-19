module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  // Uncomment the first three `extends` lines when using Prettier
  extends: [
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports,
  },
  rules: {
    /**
     * Rules specific to @typescript-eslint
     * Docs: https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
     */
    "@typescript-eslint/no-var-requires": 0, // Allow require statements

    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    "indent": [
        "error",
        4
    ],
    "linebreak-style": [
        "error",
        "unix"
    ],
    "quotes": [
        "error",
        "single"
    ],
    "semi": [
        "error",
        "always"
    ],
  }
};