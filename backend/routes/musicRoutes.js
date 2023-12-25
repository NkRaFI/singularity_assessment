const express = require('express')
const router = express.Router()

/**-controller imports-**/
const MusicController = require('../controllers/MusicController')

router
.get('/search', MusicController.getMusics)

module.exports = router