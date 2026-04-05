import type { Config } from 'tailwindcss'

// Shared Tailwind preset for all apps in TurboPets
// Each app extends this in their tailwind.config.ts
const preset: Config = {
  content: [],
  theme: {
    extend: {
      // Design tokens shared across apps will live here
      // Colors, fonts, spacing, animations etc.
    },
  },
  plugins: [],
}

export default preset
