const express = require('express')
const router = express.Router()
const AuthController = require('../controller/AuthController')
router.post('/register', AuthController.register)
router.get('/getAll', AuthController.findAll)
router.post('/post', AuthController.postMessage)
router.get('/get-post',AuthController.getPost)
module.exports = router