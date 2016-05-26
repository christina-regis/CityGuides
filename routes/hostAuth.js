var hostsController = require('../controllers/hosts_controller.js');
var express = require('express');
var router = express.Router();

router.route('/')
  .post(hostsController.authenticate);


module.exports = router;
