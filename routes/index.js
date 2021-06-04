const express = require('express')
const router = express.Router()
const {
  resourceController, articlesController
} = require('../controllers')

/* Create routes for each controller in your application. */
router
  .get('/resource', resourceController.index)

router.get('/articles', articlesController.index)

module.exports = router
