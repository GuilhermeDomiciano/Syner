// tailwind.config.js

module.exports = {
  darkMode: "class", // Habilita o modo escuro baseado na classe 'dark'
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkBackground: '#1E293B', // Cor de fundo no modo escuro
        darkCard: '#334155', // Cor dos cards no modo escuro
      },
    },
  },
  plugins: [],
};
