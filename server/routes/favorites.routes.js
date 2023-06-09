const express = require('express')
const router = express.Router()
const addfavmovie = require('../controllers/favorites.controller')

router.post('/addmovie', addfavmovie.addfavmovie)
router.get('/getmovies', addfavmovie.getfavmovies)
router.post('/deletemovie', addfavmovie.deletefavmovie)


module.exports = router