module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'site/css': 'css' });
  eleventyConfig.addPassthroughCopy({ 'site/images': 'images' });

  return {
    dir: {
      input: "site",
      output: "dist",
      includes: "_includes",
      data: "_data",
    },
    pathPrefix: "/",
    templateFormats: ["html", "liquid", "njk"],
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    passthroughFileCopy: true,
  };
}