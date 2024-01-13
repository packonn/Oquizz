// const express = require('express');
// const router = express.Router();
const router = require('express').Router();
const appController = require('../controllers/appController.js');
const levelController = require('../controllers/levelController.js');
const quizController = require('../controllers/quizController.js');
const tagController = require('../controllers/tagController.js');
const authController = require('../controllers/authController.js');
const sessionController = require('../controllers/sessionController.js');
const { catchErrors } = require('../../middlewares/errorHandlers');

router.get('/', catchErrors(appController.index));

router.get('/quiz/:id', catchErrors(quizController.show));

router.get('/tags', catchErrors(tagController.index));
router.get('/tags/:id/quizzes', catchErrors(tagController.show));

/**
 * AUTH
 */
router.get('/register', authController.registerForm);
router.post('/register', catchErrors(authController.register));

router.get('/login', sessionController.loginForm);
router.post('/login', catchErrors(sessionController.login));

router.get('/disconnect', sessionController.disconnect);


router.get('/levels', catchErrors(levelController.index));
router.get('/levels/:id', catchErrors(levelController.show));
router.post('/levels/:id/edit', catchErrors(levelController.update));
router.post('/levels/:id/delete', catchErrors(levelController.destroy));

/**
 * REST methods
 */
/**
 * index // liste des ressources
 * show // affiche une ressource
 * edit // affiche un form pour mettre à jour
 * update // fais la mise à jour
 * destroy // efface une donnee
 * create // persiste une ressource
 * store // affiche un form pour créer une ressource
 */

module.exports = router;
