const router = require("express").Router();
const controller = require('./controller');

/*
 * /api/usuarios/     GET    - READ ALL
 * /api/usuarios/     POST   - CREATE
 * /api/usuarios/:id  GET    - READ ONE
 * /api/usuarios/:id  PUT    - UPDATE
 * /api/usuarios/:id  DELETE - DEACTIVATE
 */

router.route('/')
    .get(controller.getAllUsuarios)
    .post(controller.createUsuario);
    
//router.param('id', controller.findById);

router.route('/:id')
    .get(controller.findById, controller.getUsuario)
    .put(controller.findById, controller.updateUsuario)
    .delete(controller.deactivateUsuario)
    .patch(controller.activateUsuario);

module.exports = router;