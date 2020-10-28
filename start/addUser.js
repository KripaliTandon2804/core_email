const User = use('App/Models/User')

const user = new User()

// user.username = 'krip'
// user.password = 'some-password'

// await user.save()

class UserController{

    async index({response}){

        const users = await User.all()

        response.status(200).json({
            message:'Here are your users',
            data:user
        })
    }

    async user({request,response}){
        const {name, password} = request.post()

        const user = await User.create({name, password})

        response.status(201).json({
            message: "Successfully created a new user",
            data: user
        })
    }
}