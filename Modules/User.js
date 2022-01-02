const Mongoose  = require('mongoose');
const schema = Mongoose.Schema;

const userSchema = new schema({

    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }

})
module.exports=Mongoose.model('User',userSchema)