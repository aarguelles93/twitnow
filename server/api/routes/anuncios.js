const router = require("express").Router();

class Anuncio {
  constructor(contenido, autor, ubicacion) {
    this.contenido = contenido;
    this.autor = autor;
    this.ubicacion = ubicacion;
    this.fechacreacion = Date.now();
    this.fechamodif = null;
  }
}

var arrAn = [];

//consulta todos
router.get('/', function (req, res) {
  res.json(arrAn);
});

//consulta por id
router.get('/:id', function (req, res) {
  var id = req.params.id;
  
  if (id){
    // Validar que id sea número entero
    if (typeof parseInt(id) === 'number' && id %1 == 0){
      return res.json(arrAn[id]);
    }
  }
  
  return res.status(422).json({success: false, msg: 'id inválido'});
});

//crea
router.post('/', function (req, res,next) {
  var contenido = req.body.contenido;
  var autor = req.body.autor;
  var ubicacion = req.body.ubicacion;

  if(!contenido){       
    return res.status(422).json({success: false, msg: 'Contenido no encontrado'});
  }
 
  if(!autor){
    return res.status(422).json({success: false, msg: 'Autor no encontrado'});
  }
  
  if(!ubicacion){
    return res.status(422).json({success: false, msg: 'Ubicacion no encontrado'});
  }
  
  var newAn = new Anuncio(contenido, autor, ubicacion);
  arrAn.push(newAn);
  
  res.json(newAn);
  
});

//update
router.put('/:id', function (req, res,next) {
  var id = req.params.id;
  
  var contenido = req.body.contenido;
  var autor = req.body.autor;
  var ubicacion = req.body.ubicacion;
  
  if (!(typeof parseInt(id) === 'number' && id %1 == 0)) {
    return res.status(422).json({success: false, msg: 'id inválido'});
  }
  
  if (arrAn[id]){
    var item = arrAn[id];
    
    if (contenido !== item.contenido){
      item.contenido = contenido;
    }
    
    if (autor !== item.autor && autor){
      item.autor = autor;
    }
    
    if (ubicacion !== item.ubicacion && ubicacion){
      item.ubicacion = ubicacion;
    }
    
    item.fechamodif = Date.now();
    
    return res.status(200).json(item);
    
  }else{
     return res.status(422).json({success: false, msg: 'id especificado no existe'});
  }
});

//borra
router.delete('/:id', function (req, res,next) {
  var id = req.params.id;

  if (!(typeof parseInt(id) === 'number' && id %1 == 0)) {
    return res.status(422).json({success: false, msg: 'id inválido'});
  }
  
  if (arrAn[id]){  
    arrAn.splice(id,1);
    
    return res.json({success: true, msg: 'Eliminado'});
  }else{
     return res.status(422).json({success: false, msg: 'id especificado no existe'});
  }
  
});

module.exports = router;