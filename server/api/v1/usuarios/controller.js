const Model = require('./model');

exports.findById = (req, res, next) => {
    let id = req.params.id;
    
    console.log("Looking for users...");
    Model
        .findById(id)
        //.findOne({_id:id})
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

exports.getAllUsuarios = (req, res, next) => {
    const limit = Number(req.query.limit) || 10;
    const skip = Number(req.query.skip) || 0;
    
    // Exclude disabled users
    Model.find({ estado : true })
        .skip(skip)
        .limit(limit)
        .sort({ apellido: 'asc', nombre : 'asc'})
        //.populate('author')
        .then( docs => {
            res.json({
                data: docs,
                limit,
                skip
            })
        })
        .catch( err => {
            next(new Error(err));
        });
};

exports.createUsuario = (req, res, next) => {
    const body = req.body;
    
    let document = new Model(body);
    document.save()
        .then (doc => {
            res.json(doc);    
        })
        .catch (err =>{
            next(new Error(err));
        })
    ;
};

exports.getUsuario = (req, res, next) => {
    res.json(req.doc);
};

exports.updateUsuario = (req, res, next) => {
    let document = Object.assign(req.doc, req.body);
    
    document.save()
        .then(doc => {
            res.json(doc);
        })
        .catch(err => {
            next (new Error(err));
        });
};

exports.deactivateUsuario = (req, res, next) => {
    
    let id = req.params.id;
    
    Model.findByIdAndUpdate(id, { estado: false }, {new : true, select : '_id estado' } ,(err,doc) => {
            if (err){
                next(new Error(err));
            }
            if (doc) {
                res.json(doc); 
            } else{
                next(new Error("Inexistent ID"));
            }
        });
};

exports.activateUsuario = (req, res, next) => {
    let id = req.params.id;
    
    Model.findByIdAndUpdate(id, { estado: true }, {new : true, select : '_id estado' } , (err,doc) => {
            if (err){
                next(new Error(err));
            }
            if (doc) {
                res.json(doc); 
            } else{
                next(new Error("Inexistent ID"));
            }
        });
};