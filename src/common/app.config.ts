/**
 * Application Identity (Brand)
 *
 * Also note that the 'Brand' is used in the following places:
 *  - README.md               all over
 *  - package.json            app-slug and version
 *  - [public/manifest.json]  name, short_name, description, theme_color, background_color
 */
export const Brand = {
  Title: {
    Base: 'Custom-AGI',
    Common: (process.env.NODE_ENV === 'development' ? '[DEV] ' : '') + 'big-AGI',
  },
  Meta: {
    Description: 'Launch Custom-AGI to unlock the full potential of AI, with precise control over your data and models. Voice interface, AI personas, advanced features, and fun UX.',
    SiteName: 'Custom-AGI | Precision AI for You',
    ThemeColor: '#68228B',
    TwitterSite: '@custom-agi',
  },
  URIs: {
    Home: 'https://custom-agi.vercel.app',
    // App: 'https://custom-agi.vercel.app',
    CardImage: 'https://custom-agi.vercel.app/icons/card-dark-1200.png',
    OpenRepo: 'https://custom-agi.vercel.app',
    OpenProject: 'https://custom-agi.vercel.app',
    SupportInvite: 'https://custom-agi.vercel.app',
    // Twitter: 'https://www.twitter.com/',
    PrivacyPolicy: 'https://custom-agi.vercel.app/privacy',
  },
} as const;
