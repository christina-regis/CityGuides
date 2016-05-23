var hostsController = require('../controllers/hosts_controller.js');
var express = require('express');
var router = express.Router();

router.route('/')
  .get(hostsController.index)
  // .post(hostsController.create);

// router.route('/:id')
//   .patch(hostsController.update)
//   .delete(hostsController.destroy);
