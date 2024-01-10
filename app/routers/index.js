const router = require('express').Router();
const anwserController = require('../controller/anwserController.js');
const appController = require('../controller/appController.js');
const levelController = require('../controller/levelController.js');
const questionController = require('../controller/questionController.js');

router.get('/', appController.index);

router.get('/levels', levelController.index);
router.post('/levels/add', levelController.create);
router.get('/levels/:id', levelController.show);
router.post('/levels/:id/edit', levelController.update);
router.get('/levels/:id/delete', levelController.destroy);

router.get('/questions', questionController.index);
router.get('/questions/:id', questionController.show);
router.post('/questions/:id/edit', questionController.update);
router.get('/questions/:id/delete', questionController.destroy);

router.get('/answers', anwserController.index);
router.get('/answers/:id', anwserController.show);
router.post('/answers/:id/edit', anwserController.update);
router.get('/answers/:id/delete', anwserController.destroy);

module.exports = router;
