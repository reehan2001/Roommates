const router = require('express').Router();
const authController = require('../backend/Controller/authController.js')
const activateController = require('../backend/Controller/activateController.js')
const authMiddleware = require('../backend/middlewares/auth-middleware.js');
const roomscontroller = require('../backend/Controller/rooms-controller.js')

router.post('/api/send-otp', authController.sendOtp);
router.post('/api/verify-otp',authController.verifyOtp);
router.post('/api/activate',authMiddleware,activateController.activate);
router.get('/api/refresh' , authController.refresh);
router.post('/api/logout', authMiddleware,authController.logout);
router.post('/api/rooms' , authMiddleware,roomscontroller.create);
router.get('/api/rooms' , authMiddleware,roomscontroller.index);



module.exports = router;