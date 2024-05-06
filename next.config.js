const fs = require('fs');
const blogPostsFolder = './content';

const withOptimizedImages = require('next-optimized-images');

const a = withOptimizedImages({
  handleImages: ['jpeg', 'png', 'svg'],
});

module.exports = {
  a,
  output: 'export',

  webpack: (configuration) => {
    configuration.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
    });
    return configuration;
  },
  async exportPathMap(defaultPathMap) {
    return {
      ...defaultPathMap,
      // ...getPathsForPosts(),
    };
  },
};

// const getPathsForPosts = () => {
//   return fs
//     .readdirSync(blogPostsFolder)
//     .map(blogName => {
//       const trimmedName = blogName.substring(0, blogName.length - 3);
//       return {
//         [`/blog/${trimmedName}`]: {
//           page: '/blog/[slug]',
//           query: {
//             slug: trimmedName,
//           },
//         },
//       };
//     })
//     .reduce((acc, curr) => {
//       return { ...acc, ...curr };
//     }, {});
// };
