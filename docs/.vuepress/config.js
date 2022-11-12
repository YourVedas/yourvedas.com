import { defaultTheme } from '@vuepress/theme-default'

export default {
    lang: 'en-US',
    title: 'Your Vedas',
    description: 'Sacred books of the east. The books presented here are either original scans from books and articles clearly in the public domain, material which has been presented elsewhere on the Internet, or material included under fair use conditions in printed anthologies.',
    repo: 'https://github.com/Your-Vedas/yourvedas.com',
    theme: defaultTheme({
        logo: './images/logo.png',
        navbar: [
          {
            text: 'Library',
            link: '/library',
          },
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
        ],
      }),
}