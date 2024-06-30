const express = require('express');
const customerHandler = require('./app/handlers/customer.handler');

//encapsura rutas 
const router = express.Router();


//registrar las rutas 
// rutas de customer
router.get('/customers', customerHandler.listCustomer)
router.post('/customers', customerHandler.insertCustomer)
router.patch('/customers/:id', customerHandler.updateCustomer)
router.delete('/customers/:id', customerHandler.deleteCustomer)

// otras rutas ..

module.exports = router;