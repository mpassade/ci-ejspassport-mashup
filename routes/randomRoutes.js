const express = require('express')
const router = express.Router()
const {random} = require('../controllers/thirdPartyController.js')

router.get('/random', random)

module.exports = router