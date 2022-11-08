import { defaultTheme } from '@vuepress/theme-default'

export default {
    lang: 'en-US',
    title: 'Your Vedas',
    description: 'Sacred books of the east.',
    repo: 'https://github.com/Your-Vedas/yourvedas.com',
    theme: defaultTheme({
        logo: './images/logo.png',
        navbar: [
          {
            text: 'Vedas',
            link: '/vedas',
          },
          {
            text: 'Upanishads',
            link: '/upanishads',
          },
          {
            text: 'Puranas',
            link: '/puranas',
          },
          {
            text: 'Mahabharata',
            link: '/mahabharata',
          },
          {
            text: 'Ramayana',
            link: '/ramayana',
          },
          {
            text: 'Bhagavad Gita',
            link: '/bhagavad-gita',
          },
          {
            text: 'Vedanta',
            link: '/vedanta',
          },
          {
            text: 'Later',
            link: '/later',
          },
          {
            text: 'Modern',
            link: '/modern',
          },
          {
            text: 'Misc',
            link: '/misc',
          },
        ],
      }),
}