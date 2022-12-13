const {enterUser, addUserNameAge, completePayment, enrollInBatch} = require('../controllers/userController')
const express = require('express')
const router = express.Router();

router.route('/enterUser').post(enterUser)
router.route('/addUserNameAge').post(addUserNameAge)
router.route('/completePayment').post(completePayment)
router.route('/enrollInBatch').post(enrollInBatch)
module.exports = router;