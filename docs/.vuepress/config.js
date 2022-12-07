import { defaultTheme } from '@vuepress/theme-default'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'


export default {
    lang: 'en-US',
    title: 'Sacred Books of the East',
    description: 'Welcome to your vedas, the collection of sacred books of the east. The books presented here are either original scans from books in the public domain, material which has been presented elsewhere on the internet, or material included under fair use conditions in printed anthologies.',
    repo: 'https://github.com/Your-Vedas/yourvedas.com',
    theme: defaultTheme({
        logo: './images/logo.png',
        navbar: [
          {
            text: 'Vedas',
            link: '/library/vedas',
          },
          {
            text: 'Upanishads',
            link: '/library/upanishads',
          },
          {
            text: 'Puranas',
            link: '/library/puranas',
          },
          {
            text: 'Mahabharata',
            link: '/library/mahabharata',
          },
          {
            text: 'Ramayana',
            link: '/library/ramayana',
          },
          {
            text: 'Bhagavad Gita',
            link: '/library/bhagavad-gita',
          },
          {
            text: 'Vedanta',
            link: '/library/vedanta',
          },
          {
            text: 'Modern',
            link: '/library/modern',
          },
        ],
      }),

      plugins: [
        googleAnalyticsPlugin({
          id: 'G-NCDG1XB4BN',
        }),
      ],

}