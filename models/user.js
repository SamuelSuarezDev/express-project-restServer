const {Schema, model} = require("mongoose")

const usuarioSchema = ({

    nombre:{
        type:String,
        required:[true, "El nombre es obligatorio"]
    },
    correo:{
        type:String,
        required:[true, "El correo es obligatorio"],
        unique: true,
    },
    password:{
        type:String,
        required:[true, "La contraseña es obligatorio"],
    },
    img:{
        type:String,
    },
    rol:{
        type:String,
        required:true,
        enum: ["ADMIN_ROLE", "USER_ROLE"]
    },
    state:{
        type: Boolean,
        default: true
    },
    google:{
        type: Boolean,
        default:false
    }

})

module.exports = model("Usuarios", usuarioSchema)