const mongoose = require('mongoose');
const app = require('./app');

const port = 3000;

mongoose.connect('mongodb://localhost:27017/eduBIT', { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
    if (error) {
        console.log("error de conexión", error);
    }
    else {
        console.log("Nos conectamos correctamente...");
        app.listen(port, () => {

            console.log('escuchando en el puerto', port);
        })
    }
})
