import js from '@eslint/js'
import tseslint from 'typescript-eslint'

/** @type {import('typescript-eslint').Config} */
export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    rules: {
      // Запрещаем any явно (TypeScript strict этого не ловит в некоторых случаях)
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unsafe-assignment': 'error',
      // Требуем явных return-типов у экспортируемых функций
      '@typescript-eslint/explicit-module-boundary-types': 'warn',
      // Предпочитаем ?? над ||
      '@typescript-eslint/prefer-nullish-coalescing': 'error',
      // Предпочитаем ?. над &&
      '@typescript-eslint/prefer-optional-chain': 'error',
    },
  },
  {
    ignores: ['dist/**', 'node_modules/**', '*.config.*'],
  }
)
