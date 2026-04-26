export {};

module.exports = {
  contextSeparator: '_',
  createOldCatalogs: false,
  defaultNamespace: 'translation',
  defaultValue: (locale: string, namespace: string, key: string) =>
    locale === 'en' ? key.match(/^(.*(?=::\w*)|.*(?!_\w*))/g)?.[0] : '--------',
  indentation: 2,
  keepRemoved: false,
  keySeparator: false,
  lexers: {
    js: ['JavascriptLexer'],
    ts: ['JavascriptLexer'],
    jsx: ['JsxLexer'],
    tsx: ['JsxLexer'],
    default: ['JavascriptLexer'],
  },
  lineEnding: 'auto',
  locales: ['en', 'uk'],
  namespaceSeparator: false,
  output: 'src/i18n/locales/$LOCALE/$NAMESPACE.json',
  input: ['src/**/*.{ts,tsx}'],
  sort: true,
  useKeysAsDefaultValue: false,
  verbose: false,
  failOnWarnings: false,
  customValueTemplate: null,
};