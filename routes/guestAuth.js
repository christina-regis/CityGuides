var guestsController = require('../controllers/guests_controller.js');
var express = require('express');
var router = express.Router();

router.route('/')
  .post(guestsController.authenticate);


module.exports = router;
