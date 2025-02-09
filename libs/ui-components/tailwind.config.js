const { createGlobPatternsForDependencies } = require('@nx/react/tailwind')
const { join } = require('path')
const { nextui } = require('@nextui-org/react')
const { THEME } = require('../../tailwind.config.common')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    '../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: THEME,
  darkMode: 'class',
  plugins: [nextui()],
}
