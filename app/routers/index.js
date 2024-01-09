const router = require('express').Router();
const appController = require('../controller/appController.js');
const levelController = require('../controller/levelController.js');

router.get('/', appController.index);
router.get('/levels', levelController.index);
router.get('/levels/:id', levelController.show);
router.post('/levels/:id/edit', levelController.update);
router.get('/levels/:id/delete', levelController.destroy);

module.exports = router;
