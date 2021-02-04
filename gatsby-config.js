module.exports = {
  siteMetadata: {
    title: 'DevloperCollege',
    description:
      'Complete courses about the best tools and design systems. Prototype and build apps with React and Swift. 60 hours of video content and resource materials. No coding experience required.',
    keywords:
      'react course, react for designers, ios development, sketch app, swift app course, arkit 2, after effects, create sketch plugin',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
  ],
};
