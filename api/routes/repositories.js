const express = require('express');

const router = express.Router();

const repositoryController = require('../controllers/repositories');

router.get('/', repositoryController.repositories_get_all);

module.exports = router;