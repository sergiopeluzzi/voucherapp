'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

const Factory = use('Factory')

/*
Factory.blueprint('App/Models/Colaborador', (faker) => {
  return {
    nome: faker.name(),
    cpf: faker.integer({min: 11111111111, max: 99999999999}),
    dtnascimento: faker.birthday({string: true, american: false})
  }
})
*/

Factory.blueprint('App/Models/User', (faker) => {
  return {
    username: 'admin',
    email: 'admin@facimed.edu.br',
    password: 'facvou123@'
  }
})
