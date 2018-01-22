const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    contenido : {
        type: String,
        required : true
    },
    autor:  {
        type: Schema.Types.ObjectId,
        ref: 'usuario',
        required : true
    },
    ubicacion: String
},{
    timestamps: true
});

module.exports = mongoose.model('anuncio', schema);