const express = require('express')
const router = express.Router()

const mediaController = require('../controllers/mediaController')

// GET semua media
router.get('/', mediaController.getAllMedia)

// POST upload image
router.post('/', mediaController.uploadImage)

module.exports = router