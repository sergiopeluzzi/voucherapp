'use strict'

const User = use('App/Models/User')
const Hash = use('Hash')

class UserController {

  async login ({ request, auth, view, response }) {
    const { username, password } = request.all()
    await auth.remember(true).attempt(username, password)

    return response.redirect('back')
  }

  async logout({response, auth, view}) {
    await auth.logout()

    return response.redirect('/')
  }

  async index({ view }) {
    let users =  await User.all()

    return view.render('usuarios.list', {
      title: 'Lista de Usuários',
      users: users.toJSON()
    })
  }

  async create({view}) {
    return view.render('usuarios.create', {
      title: 'Cadastrar Usuário',

    })
  }

  async store({request, response, view}) {
    let userInfo = request.only(['username', 'email', 'password'])
    let user = new User()

    user.username = userInfo.username
    user.email = userInfo.email
    user.password = await Hash.make(userInfo.password)

    await user.save()

    return response.redirect('usuarios')

  }

  async show({view}) {
    return view.render('usuarios.show')
  }

  async delete() {

  }

}

module.exports = UserController
