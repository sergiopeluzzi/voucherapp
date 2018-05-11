'use strict'

const Colaborador = use('App/Models/Colaborador')

class ColaboradoresController {

    async index({view}) {
        const colaboradores = await Colaborador.query().with('vouchers').withCount('vouchers').fetch()
   
        return view.render('colaboradores.list', {
            title: 'Lista de Colaboradores',
            colaboradores: colaboradores.toJSON()
        })
        
    }

    async show({params, view}){
        const colaborador = await Colaborador.query().with('vouchers').withCount('vouchers').where('id', params.id).fetch()

        return view.render('colaboradores.show', {
            title: 'Colaborador',
            colaborador: colaborador.toJSON()
        })

    }  

}

module.exports = ColaboradoresController
