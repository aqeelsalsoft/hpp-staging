const purgecss = require('@fullhuman/postcss-purgecss');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...(isProduction
      ? [
          purgecss({
            content: [
              './components/**/*.vue',
              './layouts/**/*.vue',
              './pages/**/*.vue',
              './app.vue',
            ],
            safelist: ['html', 'body'], // Prevent removing base styles
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
          }),
        ]
      : []),
  ],
};
