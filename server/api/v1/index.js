const router = require("express").Router();

const anunciosRoutes = require("./anuncios/routes");
const usuariosRoutes = require("./usuarios/routes");

router.use("/anuncios", anunciosRoutes);
router.use("/usuarios", usuariosRoutes);


module.exports = router;