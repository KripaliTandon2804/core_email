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
const User = use('App/Models/User')

Route.get('/users', async() => {   
    return await User.all()
})

Route.get('/addUser', async() => {
const user = new User()

user.username = 'aru'
user.password = 'password'

return await user.save()
})

/**
 * Another way to create user
 * import User from 'App/Models/User
 * 
 * const user = await User.create({
 * username: 'virk,
 * email: 'virk@adonis.com
 * })
 */

 Route.get('/update', async() => {
     const users = await User.where('username', 'krip').update({created_at: new Date()})
     return users
     
 })

 Route.get('/delete', async() => {
     const users = await User.where({'_id': '5f9929fd16b59d09d0f2adfa'}).delete()
     return await users
 })