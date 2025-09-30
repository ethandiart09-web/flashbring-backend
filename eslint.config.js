import pluginSecurity from "eslint-plugin-security";

export default [
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      security: pluginSecurity,
    },
    rules: {
      ...pluginSecurity.configs.recommended.rules,
      "no-console": "off", // autorise console.log
    },
    ignores: [
      "node_modules/**",
      "generated/**",
      "dist/**",
      "build/**",
    ],
  },
];
