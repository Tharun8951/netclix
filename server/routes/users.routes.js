const express = require('express')
const router = express.Router()
const usercontrollers = require('../controllers/users.controller')

router.post('/createuser', usercontrollers.createuser)
router.post('/loginuser', usercontrollers.loginuser)

module.exports = router