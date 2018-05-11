'use strict'

const Voucher = use('App/Models/Voucher')
const Colaborador = use('App/Models/Colaborador')

class VoucherController {

    async index({view}) {
        let vouchers = await Voucher.query().with('colaborador').fetch()

        return view.render('voucher.list', {
            title: 'Lista de Vouchers',
            vouchers: vouchers.toJSON()
        })
    }

    async show({params, response}) {
        let voucher = await Voucher.find(params.id)

        return response.json(voucher)
    }

    async create({view}) {
        let colaboradores = await Colaborador.all();

        return view.render('voucher.create', {
            title: 'Cadastrar Voucher',
            colaboradores: colaboradores.toJSON()
        })
    }

    async store({request, response, view}) {
        let voucherInfo = request.only(['codigo', 'colaborador_id', 'tipo'])

        let teste = await Voucher.findBy('codigo', voucherInfo.codigo)

        if(teste) {
            return view.render('error', {
                msg: 4,
                voucher: teste.codigo
            })
        }
        
        let voucher = new Voucher()
        voucher.codigo = voucherInfo.codigo
        voucher.colaborador_id = voucherInfo.colaborador_id
        voucher.tipo = voucherInfo.tipo       

        await voucher.save()

        return response.redirect('voucher')

    }

    async update({params, request, response}) {
        let voucherInfo = request.only(['codigo', 'colaborador_id', 'tipo'])

        let voucher = await Voucher.find(params.id)

        if(!voucher) {
            return response.status(404).json({data: 'Voucher não encontrado'})
        }

        voucher.codigo = voucherInfo.codigo
        voucher.colaborador_id = voucherInfo.colaborador_id
        voucher.tipo = voucherInfo.tipo

        await voucher.save()

        return response.status(200).json(voucher)
    }

    async delete({params, response, view}) {
        let voucher = await Voucher.find(params.id)

        if(!voucher) {
            return view.render('error', {
                msg: 5
            })
        }

        await voucher.delete()

        return response.redirect('voucher')
    }

    async validate({view}) {

        return view.render('voucher.validate', {
            title: 'Validar Voucher'
        })

    }

    async matricula({params, response}) {
        let voucher = await Voucher.find(params.id)

        if(voucher.matriculado == 0) {
            voucher.matriculado = 1
        } else {
            voucher.matriculado = 0
        }

        await voucher.save()

        return response.redirect('back')
    }

    async apply({request, response, view}) {
        let voucherInfo = request.only(['ingressante_nome', 'ingressante_cpf', 'ingressante_dtnascimento', 'codigo', 'curso'])
      
        let voucher = await Voucher.findBy('codigo', voucherInfo.codigo)
        let validaCpf = await Voucher.findBy('ingressante_cpf', voucherInfo.ingressante_cpf)

        if(!voucher) {
            return view.render('error', {
                msg: 1,
                voucher: voucherInfo.codigo
            })
        }

        if(validaCpf) {
            return view.render('error', {
                msg: 6,
                cpf: voucherInfo.ingressante_cpf
            })
        }

        if(voucher.validado == 1) {
            return view.render('error', {
                msg: 2,
                voucher: voucherInfo.codigo
            })
        }

        voucher.ingressante_nome = voucherInfo.ingressante_nome
        voucher.ingressante_cpf = voucherInfo.ingressante_cpf
        voucher.ingressante_dtnascimento = voucherInfo.ingressante_dtnascimento
        voucher.curso = voucherInfo.curso

        if(voucher.ingressante_nome == null || voucher.ingressante_cpf == null || voucher.ingressante_dtnascimento == null || voucher.curso == null) {
            return view.render('error', {
                msg: 3
            })
        }
        
        voucher.validado = 1
        
        await voucher.save()

        return view.render('success', {
            voucher: voucher
        })
    }
}

module.exports = VoucherController
