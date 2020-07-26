const express = require('express')

const debtController = require('../controller/debtController')

const creditController = require('../controller/creditController')

const router = express.Router()

router.post('/registrarDebito', debtController.store)

router.get('/todosdebitos', debtController.index)

router.get('/todosdebitos/:id', debtController.por_ID)

router.get('/countdebito', debtController.count)

router.get('/sumdebito', debtController.sum )

router.get('/valordebito', debtController.valor)

router.get('/pagos', debtController.pagos)

router.get('/countpagos', debtController.countPagos)

router.get('/lastdebitos', debtController.indexdesc)


// Fazer parte de counts e put e delete dos debitos

// CREDITO 

router.post('/registrarCredito', creditController.store)
router.get('/countcredito', creditController.count)
router.get('/sumcredito', creditController.sumCredit)
router.get('/todoscreditos',creditController.index )
router.get('/todoscreditos2', creditController.index2)

module.exports = router