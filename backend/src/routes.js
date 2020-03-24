const express = require('express');
const routes = express.Router();
const ongController = require('./controllers/ongController.js');
const incidentController = require('./controllers/incidentController.js');
const profileController = require('./controllers/profileController.js');
const sessionController = require('./controllers/sessionController.js');
;
routes.post('/sessions', sessionController.create);

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.get('/profile', profileController.index);

routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);

module.exports = routes;