import Core from '../content/guides/menu.json'
import Api from '../content/api/menu.json'

/*
|--------------------------------------------------------------------------
| Additional markdown languages
|--------------------------------------------------------------------------
|
| Additional set of VScode languages to beautify the documentation code
| blocks.
|
| The path is relative from the project root.
|
*/
export const markdownLanguages = []

/*
|--------------------------------------------------------------------------
| Theme used for codeblocks
|--------------------------------------------------------------------------
|
| Themes used for codeblocks
|
*/
export const codeBlocksTheme = 'one-dark-pro'

/*
|--------------------------------------------------------------------------
| Content zones
|--------------------------------------------------------------------------
|
| Following is the content zones with the base template they use for rendering
| the markdown nodes and a menu tree for rendering the header nav and the
| documentation sidebar.
|
*/
export const zones = [
  {
    title: 'Guides',
    baseUrl: '/',
    template: 'docs',
    contentPath: './content/guides',
    menu: Core,
  },
  {
    title: 'API',
    baseUrl: '/api',
    template: 'docs',
    contentPath: './content/api',
    menu: Api,
  },
]
