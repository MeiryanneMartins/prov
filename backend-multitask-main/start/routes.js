'use strict'
/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const Env = use('Env')

Route.get('/', ({ response }) => {
  return response.redirect('/api/v1')
})
// Unauthorized Routes
Route.post('api/v1/login', 'SessionController.store')

// Autenticated Routes
Route.group(() => {
  Route.resource('users', 'UserController').apiOnly()
  Route.resource('locale', 'LocaleController').apiOnly()
  Route.resource('quest', 'QuestController').apiOnly()
  Route.resource('ask', 'AskController').apiOnly()
  // Route.resource('permissions', 'PermissionController').apiOnly().middleware('auth')
  // Route.resource('roles', 'RoleController').apiOnly().middleware('auth')
  // Route.post('visitante/validate', 'Ambient//ValidateController.store')
  // Route.get('visitante/validate/:token', 'Ambient//ValidateController.index')
}).prefix('api/v1').middleware(['auth'])
