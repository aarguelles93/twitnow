const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    nombre : {
        type: String,
        required : true,
        maxlength: 32
    },
    apellido: {
        type: String,
        required: true,
        maxlength: 32
    },
    email: {
        type: String,
        required: true,
        maxlength: 64,
        index: { unique: true }
    }
    ,
    estado: {
        type: Boolean,
        default: true
    }
},{
    timestamps: true
});

module.exports = mongoose.model('usuario', schema);