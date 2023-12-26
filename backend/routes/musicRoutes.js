const express = require('express')
const router = express.Router()

/**-controller imports-**/
const MusicController = require('../controllers/MusicController')

router.get('/search', MusicController.getMusics)

router.get('/:id', MusicController.getMusic)

/**
 * Uncomment the following API if you want insert data
 * into your own database while runnign the application
 * locally. Also remember to uncomment the code for 
 * insertMusics in the MusicController
*/

/**
router.post('/insert', MusicController.insertMusics)
*/

module.exports = router