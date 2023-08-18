const express = require('express');
// imports controllers
const transactionsController = require('../controllers/transactionsController')
// needed to use the create router object
const router = express.Router();

// sends requests to correct controllers
router.get('/', transactionsController.getTransactions);

router.post('/', transactionsController.addTransactions);

router.delete('/', transactionsController.resetTransactions);

router.delete('/:id', transactionsController.deleteTransactions);

module.exports = router;