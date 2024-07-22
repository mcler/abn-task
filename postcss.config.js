export default {
  plugins: {
    'tailwindcss/nesting': 'postcss-nested',
    'tailwindcss': {},
    'postcss-preset-env': {
        features: {
            'custom-media-queries': false,
            'media-query-ranges': true,
            'nesting-rules': false,
        },
    },
  },
}
