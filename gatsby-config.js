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
        fonts: [`Montserrat\:300,400`, "Lora:400"],
        display: "swap",
      },
    },
  ],
};
