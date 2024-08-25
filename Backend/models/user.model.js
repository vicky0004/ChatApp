import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    fullname:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    confirmPassword:{
        type:String,
    },
},{timestamps:true})

const User = mongoose.model("User",userSchema);
export default User;