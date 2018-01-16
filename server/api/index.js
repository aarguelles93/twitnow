const router = require("express").Router();

const anunciosRoutes = require("./routes/anuncios");

router.use("/anuncios", anunciosRoutes);


module.exports = router;