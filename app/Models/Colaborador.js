'use strict'

const Model = use('Model')

class Colaborador extends Model {

    static get table() {
        return 'colaboradores'
    }

    static get primaryKey() {
        return 'id'
    }

    vouchers() {
        return this.hasMany('App/Models/Voucher')
    }
}

module.exports = Colaborador
