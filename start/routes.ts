/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'
import Content from 'App/Services/Content'

Route.get('/404', () => '404')

Route.get('*', async ({ request, response, view }) => {
  const { html, error } = await Content.render(request.url())

  if (error && error.includes('Unable to lookup')) {
    return response.redirect('/404')
  } else if (error) {
    return error
    return view.render('errors/500', { error })
  } else {
    response.send(html)
  }
})
