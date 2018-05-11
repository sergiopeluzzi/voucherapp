'use strict'

const Schema = use('Schema')

class ColaboradorSchema extends Schema {
  up () {
    this.create('colaboradores', (table) => {
      table.increments()
      table.string('nome').nullable()
      table.string('cpf').nullable()
      table.string('dtnascimento').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('colaboradores')
  }
}

module.exports = ColaboradorSchema
