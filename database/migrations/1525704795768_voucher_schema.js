'use strict'

const Schema = use('Schema')

class VoucherSchema extends Schema {
  up () {
    this.create('vouchers', (table) => {
      table.increments()
      table.string('codigo')
      table.integer('colaborador_id').unsigned().notNullable()
      table.string('tipo').notNullable()
      table.string('ingressante_nome').nullable()
      table.string('ingressante_cpf').unique().nullable()
      table.string('ingressante_dtnascimento').nullable()
      table.string('curso').nullable()
      table.integer('validado').defaultTo(0)
      table.integer('matriculado').defaultTo(0)
      table.timestamps()

      table.foreign('colaborador_id').references('id').inTable('colaboradores')
    })
  }

  down () {
    this.drop('vouchers')
  }
}

module.exports = VoucherSchema
