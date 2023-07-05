const { Router } = require('express');
const multer = require('multer');

/* Controllers */
const AuthController = require('./controllers/AuthController');
const EventController = require('./controllers/EventController');
const PartnerController = require('./controllers/PartnerController');
const PasswordEmailController = require('./controllers/PasswordEmailController');
const UserController = require('./controllers/UserController');

const authMiddleware = require('./middlewares/auth');

const uploadConfig = require('./config/uploadConfig');

const routes = Router();

/* Routes of login */
routes.post('/authenticate', AuthController.login); /* Route of users authenticate */

/* Routes of user methods */
routes.post('/users', multer(uploadConfig.upload).single("file"), UserController.store);
routes.post('/usersWithoutPhoto', multer(uploadConfig.upload).single("file"), UserController.storeWithoutPhoto);
routes.get('/users', authMiddleware, UserController.index);
routes.get('/user/:_id', authMiddleware, UserController.show);
routes.delete('/user/:_id', authMiddleware, UserController.destroy);
routes.put('/user/:_id', authMiddleware, multer(uploadConfig.upload).single("file"), UserController.update);
routes.put('/userWithoutPhoto/:_id', authMiddleware, multer(uploadConfig.upload).single("file"), UserController.updateWithoutPhoto);
routes.put('/userAdmin/:_id', authMiddleware, UserController.updateAdmin);
routes.put('/acceptAdmin/:_id', authMiddleware, UserController.acceptAdmin);
routes.put('/updatePassword/:_id', authMiddleware, UserController.updatePassword);

/* Route for password recovery */
routes.post('/forgot-password', PasswordEmailController.forgotPassword);

/* Routes of Partner methods */
routes.get('/partners', authMiddleware, PartnerController.index);
routes.post('/partners', authMiddleware, multer(uploadConfig.upload).single("file"), PartnerController.store);
routes.post('/partnersWithoutPhoto', authMiddleware, multer(uploadConfig.upload).single("file"), PartnerController.storeWithoutPhoto);
routes.get('/partner/:_id', authMiddleware, PartnerController.show);
routes.delete('/partner/:_id', authMiddleware, PartnerController.destroy);
routes.put('/partner/:_id', authMiddleware, multer(uploadConfig.upload).single("file"), PartnerController.update);
routes.put('/partnerWithoutPhoto/:_id', authMiddleware, multer(uploadConfig.upload).single("file"), PartnerController.updateWithoutPhoto);

/* Routes of Event methods */
routes.get('/events', authMiddleware, EventController.index);
routes.post('/events', authMiddleware, EventController.store);
routes.get('/event/:_id', authMiddleware, EventController.show);
routes.delete('/event/:_id', authMiddleware, EventController.destroy);
routes.put('/event/:_id', authMiddleware, EventController.update);


module.exports = routes;
