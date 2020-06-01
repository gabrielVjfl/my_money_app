const port = 5110

const express = require('express')

const app = express()

const bodyParser = require('body-parser')

const cors = require('cors')

const mongoose = require('mongoose')

require('./models/mongo')

const pay = mongoose.model('paypay2')

const queryParser = require('express-query-int')

// const pay = mongoose.model('pay')



app.use(cors())

app.use(queryParser())

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: true
}))

mongoose.Promise = global.Promise

mongoose.connect('mongodb+srv://gabrielVjfl:60818181@cluster0-lqnvw.gcp.mongodb.net/payments', {useNewUrlParser: true})
.then(() => {
    console.log('Conectado')
}).catch(() => {
    console.log('Erro!')
})

app.get('/todos', (req, res) => {
      pay.find().then((suc) => {
          res.send(suc)
      }).catch((err) => {
          console.log(err)
      })
})


app.post('/registrarPay', async(req,res) => {

    const {name, month, year, credits, debts} = req.body


    try {
    const payments = await pay.create(req.body)
    
     return res.send({payments, name,month,year,credits,debts})
    }
    catch (err) {
        console.log('errosss!', err)
    }
    })


    // PEGA PELO ID
app.get('/pegarPay/:id', (req,res) => {
    pay.findOne({_id: req.params.id}).then((suc) => {
      res.send(suc)
         

}).catch((err) => {
    console.log(err)
})
    })


    // PUT
    app.put('/pegarPay/:id',async (req,res) => {
        const {name, month, year, credits, debts} = req.body


        try {
        const payments = await pay.updateOne(req.body)
        
         return res.send({payments, name,month,year,credits,debts})
        }
        catch (err) {
            console.log('errosss!', err)
        }
    })


    app.delete('/delete/:id', async(req,res) => {
        
        try {

  await pay.findByIdAndRemove(req.params.id)

  return res.send("Excluido com sucesso")

        }
        catch(err) {
            console.log(err)
             return res.status(400).send({err: "OCORREU UM ERRO AO EXCLUIR"})
        }
    })

    // COUNT quantidade de elementos
    app.get('/count', (req,res) => {
        pay.countDocuments((err, count) => {

            if(err) {
                res.send(err)
            }
            else {
            res.send({registros: count})
            }
        })
    })

app.get('/summary', (req,res) => {
    pay.aggregate([{ 
        // Projeta a soma organiza, agrupa
        $project: {creditGet: {$sum: "$credits.value"}, debtGet: {$sum: "$debts.value"}} // Soma dos creditos, creditSum vai pegar as somas
    
    }, {// Faz a soma do total de creditos e debitos, 
        $group: {_id: null, creditSumTotal: {$sum: "$creditGet"}, debtSumTotal: {$sum: "$debtGet"}}

    }, // Vai dizer se vai aparecer ou não, id não, credit e debt não
     {
        $project: {_id: 0,  creditSumTotal: 1, debtSumTotal: 1, diferenca: 1}
    }
   
], (error, result) => {
        if(error) {
            res.send('Errou!!!', error)
        }
        else {
           
            res.send(result[0] || {creditSumTotal: 0, debtSumTotal: 0}) 
        }
    })
})



app.listen(port, () => {
    console.log(`Backend is running ${port}`)
})