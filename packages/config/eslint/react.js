import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import boundaries from 'eslint-plugin-boundaries'
import base from './base.js'
import tseslint from 'typescript-eslint'

/** @type {import('typescript-eslint').Config} */
export default tseslint.config(
  ...base,
  {
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      boundaries,
    },
    settings: {
      react: { version: 'detect' },
      // FSD layer boundaries — импорт только вниз по слоям
      'boundaries/elements': [
        { type: 'app',      pattern: 'src/app/*' },
        { type: 'pages',    pattern: 'src/pages/*' },
        { type: 'features', pattern: 'src/features/*' },
        { type: 'entities', pattern: 'src/entities/*' },
        { type: 'shared',   pattern: 'src/shared/*' },
      ],
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      // React 17+ — JSX transform, импорт React не нужен
      'react/react-in-jsx-scope': 'off',
      // Хуки зависимости
      'react-hooks/exhaustive-deps': 'warn',
      // FSD: запрещаем импорт вверх по слоям
      'boundaries/element-types': [
        'error',
        {
          default: 'disallow',
          rules: [
            { from: 'app',      allow: ['pages', 'features', 'entities', 'shared'] },
            { from: 'pages',    allow: ['features', 'entities', 'shared'] },
            { from: 'features', allow: ['entities', 'shared'] },
            { from: 'entities', allow: ['shared'] },
            { from: 'shared',   allow: [] },
          ],
        },
      ],
    },
  }
)
