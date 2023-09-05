/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@ds-turbo/foundation/lib/tailwindDesignPreset.config.js')],
  content: ['./src/**/*.{html,js,jsx,tsx,ts}'], // Corrigido o padrão de seleção de arquivos
  plugins: [],
};
