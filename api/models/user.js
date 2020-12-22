const mongoose = require('mongoose');


let Schema = mongoose.Schema;


let userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre es Obligatorio']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'El Email es Obligatorio']
    },
    password: {
        type: String,
        required: [true, 'El Password es Obligatorio']
    },
    img: {
        type: String,
        required: false
    },
    google: {
        type: Boolean,
        default: false
    },
    active: {
        type: Boolean,
        default: true
    }
});

userSchema.methods.toJSON = function () {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;
}


module.exports = mongoose.model('User', userSchema);