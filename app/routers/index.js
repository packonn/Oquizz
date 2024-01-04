const router = require('express').Router();
const appController = require('../controller/appController.js');

router.get('/', appController.index);

module.exports = router;
