const express = require('express')

const mongoose = require('mongoose')
const { index } = require('./debtController')

require('../models/credito')

const credito = mongoose.model('credito')


module.exports = {
    async store(req,res) {
        const {name, year, month, valor} = req.body

        try {
        const salvar = await credito.create(req.body)

        return res.send(salvar)
        }
        catch(err) {
         return res.send('erro!')
        }

    },
    async  count(req, res) {
          credito.countDocuments((err, count) => {
              if(err) {
                  res.send("deu erro")
              }
              else {
                  res.send({count: count})
              }
          })
    },
    async sumCredit(req,res) {
           credito.aggregate([{
                 $group: {
                     _id: 0, valor: {$sum: '$valor'}
                 }
           }], (erro, result) => {
               if(erro) {
                   res.send("Erros", erro)
               }
               else {
                   res.send(result)
               }
           }) 
    },

    async index(req,res) {
      let todos = await  credito.find()
  
        res.send(todos)

    },

    async index2(req,res) {
        let todos2 = await credito.find().sort({_id: 'desc'})
        res.send(todos2)

    }
}