const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const passportLocalMongoose=require("passport-local-mongoose");
//Passport-Local Mongoose does not require passport or mongoose dependencies directly but expects you to have these dependencies installed.
// In case you need to install the whole set of depende
const userSchema=new Schema({
    email:{
        type:String,
        required:true,
    }
});

userSchema.plugin(passportLocalMongoose);
module.exports=mongoose.model("User",userSchema);