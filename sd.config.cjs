module.exports = {
  source: ['sd-input/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'tokens/',
      prefix: 'figma',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
        },
      ],
    },
  },
};
