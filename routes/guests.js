var guestsController = require('../controllers/guests_controller.js');
var express = require('express');
var router = express.Router();

router.route('/')
  .get(guestsController.index)
  .post(guestsController.create);

router.route('/:id')
  .get(guestsController.show)
  .patch(guestsController.update)
  .delete(guestsController.destroy);

module.exports = router;
