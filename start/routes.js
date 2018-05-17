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
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

//Route.on('/').render('welcome')

Route.group(() => {

    Route.get('/', async function({view}) {
        return view.render('home', { title: 'Página Inicial' })
    }).as('home')
    
    Route.get('vouchers', 'VoucherController.validate').as('validate')
    Route.post('vouchers', 'VoucherController.apply').as('apply')
    Route.post('usuarios', 'UserController.login').as('login')
    
})

Route.group(() => {
    Route.get('usuarios', 'UserController.index').as('usuarios.index')
    Route.get('usuarios/:id', 'UserController.show').as('usuarios.show')
    
    Route.get('usuarios-logout', 'UserController.logout').as('logout')
    Route.get('usuarios-delete/:id', 'UserController.delete').as('usuarios.delete')

    Route.get('colaboradores', 'ColaboradoresController.index').as('colaboradores.index')
    Route.get('colaboradores/:id', 'ColaboradoresController.show').as('colaboradores.show')

    Route.get('voucher', 'VoucherController.index').as('voucher.index')
    Route.get('voucher/:id', 'VoucherController.show')
    Route.get('voucher-create', 'VoucherController.create').as('voucher.create')
    Route.put('voucher/:id', 'VoucherController.update')
    Route.post('voucher', 'VoucherController.store').as('voucher.store')
    Route.get('voucher-delete/:id', 'VoucherController.delete').as('voucher.delete')

    Route.get('matricular/:id', 'VoucherController.enroll').as('voucher.enroll')
    Route.post('matricular', 'VoucherController.matricula').as('matricula')
}).middleware(['auth'])

