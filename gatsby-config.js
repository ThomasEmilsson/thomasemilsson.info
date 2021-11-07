module.exports = {
  siteMetadata: {
    siteUrl: "https://www.thomasemilsson.info",
    title: "thomasemilsson.info",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat\:300,400, 400i, 500, 600`, "Lora:400, 500, 600"],
        display: "swap",
      },
    },
  ],
};
