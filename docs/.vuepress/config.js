import { defaultTheme } from '@vuepress/theme-default'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'


export default {
    lang: 'en-US',
    title: 'Sacred Books of the East',
    colorMode: 'auto',
    description: 'The books presented here are either original scans of books in the public domain, material that has been presented elsewhere on the internet, or material included under fair use conditions in printed anthologies.',
    theme: defaultTheme({
        logo: './images/logo-light.png',
        logoDark: './images/logo-dark.png',
        navbar: [
          {
            text: 'Library',
            link: '/library/index.html',
          }
        ],
        head: [
          [
            "script",
            {
              "data-ad-client": "ca-pub-6859637226929870",
              async: true,
              src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
            },
          ],
        ],
    }),

    plugins: [
      googleAnalyticsPlugin({
        id: 'G-NCDG1XB4BN',
      })
    ],

}