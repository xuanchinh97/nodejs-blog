const express = require('express')
const router = express.Router()

const sideController = require('../app/controllers/SiteController')

router.use('/:slug',sideController.search)
router.use('/' ,sideController.index)

module.exports = router
