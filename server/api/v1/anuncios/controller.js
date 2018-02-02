const Model = require('./model');
const usuarioModel = require('./../usuarios/model');

exports.find = (req, res, next, id) => {

    Model
        .findById(id)
        //.findOne({ _id : id, 'autor.estado' : true }) // Hide disabled users posts
        .populate({path : 'autor', match : {estado : true}})
        .then( doc => {
             if (doc) {
                req.doc = doc;
                next();
            } else{
                next(new Error("Inexistent ID"));
            }
        })
        .catch( err => {
            next(new Error(err));
    });
};

// Buscar/listar todos los anuncios
exports.getAllAnuncios = (req, res, next) => {
    const limit = Number(req.query.limit) || 10;
    const skip = Number(req.query.skip) || 0;
    
    Model
        //.find({'autor.estado' : true}) // Show only active users posts
        .find()
        .skip(skip)
        .limit(limit)
        .sort({ createdAt: -1 })
        //.populate('autor')
        .populate({path : 'autor', match : {estado : true}})
        //.populate('autor', {estado : true})
        .then( docs => {
            let filtereddocs
            if (docs){
                filtereddocs = docs.filter(function(a){return a._doc.autor !== null}) // Temporary walk-around filter
            }
            res.json({
                //data: docs,
                data : filtereddocs, // Temporary walk-around filter
                limit,
                skip
            })
        })
        .catch( err => {
            next(new Error(err));
        });
        
    
};

//Crear un nuevo anuncio
exports.createAnuncio = (req, res, next) => {
    const body = req.body;
    const autorId = req.body.autor;
    
    // Validate that user/autor is active
    usuarioModel.findOne( {_id : autorId , estado : true})
        .then( doc => {
            if (doc){
                let document = new Model(body);
                document.save()
                    .then (doc => {
                        res.json(doc);    
                    })
                    .catch (err =>{
                        next(new Error(err));
                    })
                ;   
            }else{
                // Author doesnt exist or is deactivated
                next(new Error("Invalid author"));
            }
        })
        .catch( err => {
             next(new Error(err));
        })
    ;
};

//Buscar un anuncio por ID
exports.getAnuncio = (req, res, next) => {
    res.json(req.doc);
};

//Actualizar anuncio por ID
exports.updateAnuncio = (req, res, next) => {
    let document = Object.assign(req.doc, req.body);
    
    document.save()
        .then(doc => {
            res.json(doc);
        })
        .catch(err => {
            next (new Error(err));
        });
};

// Eliminar anuncio por ID
exports.deleteAnuncio = (req, res, next) => {
    const doc = req.doc;
    
    doc.remove()
        .then( deleted => {
            res.json(deleted);
        })
        .catch(err => {
            next (new Error(err));
        });
};