const {Schema, model, default: mongoose} = require('mongoose')

// accepts : name , username,email,password,mobile,country,gender
// returns: id, token
const UserSchema = new Schema({
     username : String,
     email : String,
     password : String,
     mobile : Number,
     country : String,
})

module.exports = model('user',UserSchema);



