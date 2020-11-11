'use strict'
const User = use('App/Models/User')
const CoreMail = use('CoreMail')  //require('../../Providers/Core-Email/src/index')
console.log(">>>>>>>>>>>>>>>>>>>", CoreMail)
class UserController {
    
async store({request}) {
    
    const users = new User();
    users.username = 'Kripali';
    users.email = 'kripalitandon@gmail.com';
    users.password = 'password12'

    const user = await User.create(users.toJSON())
    const data = request.only(['email', 'username', 'password'])

    await CoreMail.sendMail('plain text email', (message) => {
      message
        .to('kripalitandon@gmail.com')
        .from('kripalitandon@gmail.com')
        .subject('Welcome to yardstick')
    })

    return 'Registered successfully'
  }  
}

module.exports = UserController
