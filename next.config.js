const fs = require('fs');
const blogPostsFolder = './content';

const nextConfig = {
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

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
};

const a = {};

module.exports = nextConfig;

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
