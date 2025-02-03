import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import html from "eslint-plugin-html";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.html"], plugins: { html } },
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  eslintConfigPrettier,
];
