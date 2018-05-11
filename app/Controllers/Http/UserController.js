'use strict'

const User = use('App/Models/User')

class UserController {

  async login ({ request, auth, view, response }) {
    const { username, password } = request.all()
    await auth.remember(true).attempt(username, password)

    return response.redirect('back')
  }

  async logout({response, auth, view}) {
    await auth.logout()

    return response.redirect('/api/v1')
  }

  async index({ view }) {
    let users =  await User.all()

    return view.render('usuarios.list', {
      title: 'Lista de Usuários',
      users: users.toJSON()
    })
  }

  async show({view}) {
    return view.render('usuarios.show')
  }

  async delete() {

  }

}

module.exports = UserController
