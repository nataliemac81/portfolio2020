module.exports = {
  siteMetadata: {
    siteTitle: 'Chronoblog Profile Starter',
    siteDescription: 'Starter for Gatsby Theme Chronoblog',
    siteImage: '/nat-avatar.png', // main image of the site for metadata
    siteUrl: 'https://chronoblog-profile.now.sh/',
    pathPrefix: '/',
    siteLanguage: 'en',
    ogLanguage: `en_US`,
    author: 'Natalie McCroy', // for example - 'Ivan Ganev'
    authorDescription: 'Full Stack Web Developer', // short text about the author
    avatar: '/nat-avatar.png',
    twitterSite: '', // website account on twitter
    twitterCreator: '', // creator account on twitter
    social: [
      {
        icon: `linkedin`,
        url: `https://www.linkedin.com/in/nataliemccroy/`
      },
      {
        icon: `github`,
        url: `https://github.com/nataliemac81`
      },
      {
        icon: `codepen`,
        url: `https://codepen.io/nataliemc`
      }
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-theme-chronoblog',
      options: {
        uiText: {
          // ui text fot translate
          feedShowMoreButton: 'show more',
          feedSearchPlaceholder: 'search',
          cardReadMoreButton: 'read more →',
          allTagsButton: 'all tags'
        },
        feedItems: {
          // global settings for feed items
          limit: 50,
          yearSeparator: false,
          yearSeparatorSkipFirst: true,
          contentTypes: {
            links: {
              beforeTitle: '🔗 '
            }
          }
        },
        feedSearch: {
          symbol: '🔍'
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chronoblog Gatsby Theme`,
        short_name: `Chronoblog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3a5f7d`,
        display: `standalone`,
        icon: `src/assets/nat-avatar.png`
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-XXXXXXXXX-X'
      }
    }
  ]
};
