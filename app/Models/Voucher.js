'use strict'

const Model = use('Model')

class Voucher extends Model {

    static get table() {
        return 'vouchers'
    }

    static get primaryKey() {
        return 'id'
    }

    colaborador() {
        return this.belongsTo('App/Models/Colaborador')
    }
}

module.exports = Voucher
