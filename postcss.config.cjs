module.exports = {
  plugins: ['tailwindcss', 'postcss-preset-env'],
};

// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//     ...(process.env.NODE_ENV === "production"
//       ? {
//           "@fullhuman/postcss-purgecss": {
//             content: ["./components/**/*.js", "./pages/**/*.js"],
//             defaultExtractor: (content) =>
//               content.match(/[\w-/:]+(?<!:)/g) || [],
//           },
//         }
//       : {}),
//   },
// };

// module.exports = {
//   plugins: [
//     "tailwindcss",
//     process.env.NODE_ENV === "production"
//       ? [
//           "@fullhuman/postcss-purgecss",
//           {
//             content: [
//               "./pages/**/*.{js,jsx,ts,tsx}",
//               "./components/**/*.{js,jsx,ts,tsx}",
//             ],
//             defaultExtractor: (content) =>
//               content.match(/[\w-/:]+(?<!:)/g) || [],
//           },
//         ]
//       : undefined,
//     "autoprefixer",
//   ],
// };
