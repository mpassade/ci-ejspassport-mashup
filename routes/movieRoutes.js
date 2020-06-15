const express = require('express')
const router = express.Router()
const {movies} = require('../controllers/thirdPartyController.js')

router.get('/movies', movies)

module.exports = router