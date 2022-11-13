import { defaultTheme } from '@vuepress/theme-default'

export default {
    lang: 'en-US',
    title: 'Sacred Books of the East',
    description: 'Welcome to YourVedas, the online archive of scared books of the east. The books presented here are either original scans from books in the public domain, material which has been presented elsewhere on the Internet, or material included under fair use conditions in printed anthologies.',
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
            text: 'Later',
            link: '/library/later',
          },
          {
            text: 'Modern',
            link: '/library/modern',
          },
        ],
      }),
}