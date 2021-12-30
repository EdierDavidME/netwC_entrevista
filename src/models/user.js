const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const saltRounds = 10;

let userSchema = new Schema({
    id: { type: String },
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true },
    registerDate: { type: Date, default: Date.now() }
});


userSchema.pre('save', function (next) {
    bcrypt.genSalt(saltRounds).then(salts => {
        bcrypt.hash(this.password, salts).then(hash => {
            this.password = hash;
            next();
        }).catch(error => next(error));
    }).catch(error => next(error));
});

let User = mongoose.model('Users', userSchema);

module.exports = User;