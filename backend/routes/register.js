const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');


//data needed to register Admin : nom, prenom, tel, email , password
router.post('/compte/admin', registerController.createAdmin);

//data needed to register client : nom, prenom, tel, email , password
router.post('/compte/client', registerController.createClient);

module.exports = router;