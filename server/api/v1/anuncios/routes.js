const router = require("express").Router();
const controller = require('./controller');

/*
 * /api/anuncios/     GET    - READ ALL
 * /api/anuncios/     POST   - CREATE
 * /api/anuncios/:id  GET    - READ ONE
 * /api/anuncios/:id  PUT    - UPDATE
 * /api/anuncios/:id  DELETE - DELETE
 */

router.route('/')
    .get(controller.getAllAnuncios)
    .post(controller.createAnuncio)
    
router.param('id', controller.find)
    
router.route('/:id')
    .get(controller.getAnuncio)
    .put(controller.updateAnuncio)
    .delete(controller.deleteAnuncio)

module.exports = router;