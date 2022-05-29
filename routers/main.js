var express = require('express');
const mainController = require('../controllers/mainControllers');

var router = express.Router(); 


router.get('/', mainController.index); 
router.get('/about', mainController.about); 

module.exports = router; 