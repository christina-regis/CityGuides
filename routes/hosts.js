var hostsController = require('../controllers/hosts_controller.js');
var express = require('express');
var router = express.Router();

router.route('/')
  .get(hostsController.index)
  .post(hostsController.create);

router.route('/:id')
  .get(hostsController.show)
  .patch(hostsController.update)
  .delete(hostsController.destroy);

module.exports = router;
