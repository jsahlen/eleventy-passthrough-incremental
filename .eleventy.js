module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ './src/scripts': 'scripts' });

  return {
    dir: {
      input: './src/content',
      output: './dist',
    },
  };
};
