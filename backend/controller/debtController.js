const mongoose = require('mongoose')

const express = require('express')
// const { count } = require('./creditController')

require('../models/debito')

const debito = mongoose.model('debito')

module.exports = {
    async store(req,res) {
        
        const {name, valor , status, month, year} = req.body

        try {
        const salvarDebt = await debito.create(req.body)

        res.send(salvarDebt)
        }

        catch(err) {
            res.send('ocorreu erro', err)
        }
    },

    async index(req,res) {
        const pegar = await debito.find()

        res.send(pegar)
    },

    async  por_ID(req,res) {
        const pegar = await debito.findById(req.params.id)

        res.send(pegar)
    },
    async count(req,res) {
         debito.countDocuments((err, count) => {
             if(err) {
                 res.send(err)
             }
             else {
                 res.send({count: count})
             }
         })
    },

    async sum(req,res) {
     
   debito.aggregate([{
          
    $group: {
        _id: '0', valor: {$sum: '$valor'} // soma o valor em debitos
    }
   }
], (error, result) => {
    if(error) {
        res.send('Errou!!!', error)
    }
    else {
        res.send(result)
    }
})

    },
// Mostra só os valores
    async valor(req, res)  {
         let valor = await  debito.find({}, {_id: 0, valor: 1, name: 1}) // PEGA OS VALORES E A DESCRICAO

         res.send(valor)
    },

    async  indexdesc(req,res) {
        let lista = await debito.find().sort({_id: 'desc'}) // MAIS VELHOS

        res.send(lista)
    },

    // MOSTRA SÓ OS STATUS PAGO
    async pagos(req,res) {
        let pagos = await debito.find().where('status').all(['PAGO'])

        res.send(pagos)
    },


    // CONTAR  SÓ OS PAGOS
    async countPagos(req,res) {
        await debito.where({ 'status': 'PAGO' }).count((err, count) => {
            if(err) {
                res.send(err)
            }
            else {
                res.send({count: count})
            }
        })

     
    }
}
