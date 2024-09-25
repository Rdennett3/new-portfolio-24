/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto\:300,400,500,700`, // You can include multiple weights
          `open sans\:300,400,400i,700`, // Specify italics with 'i'
          `playfair display\:400,500,600,700,800,900`,
        ],
        display: 'swap' // This ensures that the text remains visible during the font load.
      },
    },
  ],
}