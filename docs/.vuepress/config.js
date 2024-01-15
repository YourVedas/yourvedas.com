import { defaultTheme } from '@vuepress/theme-default'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'


export default {
    lang: 'en-US',
    title: 'Sacred Books of the East',
    description: 'The books presented here are either original scans of books in the public domain, material that has been presented elsewhere on the internet, or material included under fair use conditions in printed anthologies.',
    repo: 'https://github.com/Your-Vedas/yourvedas.com',
    theme: defaultTheme({
        logo: './images/logo.png',
        navbar: [
          {
            text: 'Vedas',
            link: '/library/vedas',
          },
          {
            text: 'Bhagavad Gita',
            link: '/library/bhagavad-gita',
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
        })
      ],

}