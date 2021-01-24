const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var EstudiantesSchema = new Schema({
    nombres: String,
    edad: Number,
    correo: String,
    dirección: String,
    telefono: Number,

});module.exports = mongoose.model('Estudiantes', EstudiantesSchema);