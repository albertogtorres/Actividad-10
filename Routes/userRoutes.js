const express = require('express');
const UserController = require('../controllers/UserController');

const api = express.Router();

api.get ( '/saludar', (req, res) => {

    console.log('llegó a la ruta saludar...');
} );

api.post('/', UserController.create);
api.put('/:idEstudiantes', UserController.update);
api.delete('/:idEstudiantes', UserController.remove);
api.get('/allEstudiantes', UserController.getAllEstudiantes)

module.exports = api;