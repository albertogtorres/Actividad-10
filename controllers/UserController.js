
const Estudiantes = require('../models/Estudiantes');

function create(req, res) {
    var estudiantes = new Estudiantes();
    var params = req.body;


    estudiantes.nombres = params.nombres;
    estudiantes.edad = params.edad;
    estudiantes.correo = params.correo;
    estudiantes.dirección = params.dirección;
    estudiantes.telefono = params.telefono;

    estudiantes.save( (error, estudiantesCreated) => {
        if(error){
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
        

            })
        }else{
            if(!estudiantesCreated){
                res.status(400).send({
                    statusCode: 400,
                    message: "Error al insertar el estudiante"
                })
            }else{
                res.status(200).send({
                    statusCode: 200,
                    message: "estudiante almacenado correctamente",
                    dataEstudiantes: estudiantesCreated,
                })
            }
        }
    })


}
function update(req, res) {

    var parameters = req.body;
    var idEstudiantes = req.params.idEstudiantes;

    Estudiantes.findByIdAndUpdate( idEstudiantes, parameters, (error, estudiantesUpdate) => {
        if(error){
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        }else{
            if(!estudiantesUpdate){
                res.status(400).send({
                    statusCode: 400,
                    message: "Error al actualizar el estudiante"
                })
            }else{
                res.status(200).send({
                    statusCode: 200,
                    message: "El estudiante se actualizó correctamente"
                })
            }
        }
    }
    
    )
}
function remove(req, res) {

    var idEstudiantes = req.params.idEstudiantes;

     Estudiantes.findByIdAndDelete( idEstudiantes, (error, estudiantesRemove) => {
        if(error){
            res.status(500).send({
                statusCode:500,
                message: "Error en el servidor"
            })
        }else{
            if(!estudiantesRemove){
                res.status(400).send({
                    statusCode: 400,
                    message: "Error al eliminar el estudiante"
                })
            }else{
                res.status(200).send({
                    statusCode: 200,
                    message: "Estudiante eliminado correctamente"
                })
            }
        }
    })

}
function getAllEstudiantes (req, res){
    Estudiantes.find(  {}, (error, allEstudiantes) => {
        if(error){
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            }
            )
        }else{
            res.status(400).send({
                statusCode: 400,
                message: "Todos los estudiantes",
                allEstudiantes: allEstudiantes
            })
        }
    } )
}


module.exports = {
    create,
    update,
    remove,
    getAllEstudiantes
}
