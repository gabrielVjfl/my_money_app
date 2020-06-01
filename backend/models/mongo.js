const mongoose = require('mongoose')

const Schema = mongoose.Schema

const creditSchema = new Schema({
      name: {
          type: String,
          required: true,
      },
      value: {
          type: Number,
          min: 0,
          required: true,
      }
})
const debtSchema = new Schema({
    name: { 
        type: String,
        required: true,
    },
    value: { 
        type: Number,
        min: 0,
        required: true,
    },
    status: { 
        type: String,
        required: false,
        uppercase: true,
       // enum: ['PAGO', 'PENDENTE', 'AGENDADO'],
    },

})
// TABELA PRINCIPAL
const cyclePay = new Schema({
    name: {
        type:String,
        required: true,
        
    },
    month: {
        type: Number, 
        min: 1,
        max: 12,
        required: true,
    },
    year: {
        type: Number,
        max: 2100,
        required: true,
        min:1970
    },
        credits: [creditSchema], // aponta para a tabela credito
        debts: [debtSchema], // aponta para a tabela débito
        
})
module.exports = mongoose.model('paypay2', cyclePay)