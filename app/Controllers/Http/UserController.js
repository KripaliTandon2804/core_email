'use strict'
const User = use('App/Models/User')
const CoreMail = use('CoreMail')
class UserController {
    
async store() {
    
    // const users = new User();
    // users.username = 'Kripali';
    // users.email = 'kripalitandon@gmail.com';
    // users.password = 'password12'

    // const user = await User.create(users.toJSON())
    // const data = request.only(['email', 'username', 'password'])

    await CoreMail.sendMail('kripalitandon@gmail.com','kripalitandon@gmail.com', 'Welcome')

    return 'Registered successfully'
  }  
}

module.exports = UserController
