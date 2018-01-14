const express = require('express');

const app = express();

const repositoryRoutes = require('./api/routes/repositories');

app.use('/repositories', repositoryRoutes);

module.exports = app;