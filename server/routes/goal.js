const express = require('express');
// imports controllers
const goalController = require('../controllers/goalController')
// needed to use the create router object
const router = express.Router();

// sends requests to correct controllers
router.get('/', goalController.getGoal);
router.post('/', goalController.setGoal);


module.exports = router;