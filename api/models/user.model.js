import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        },
        profilePicture:{
            type:String,
            default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngall.com%2Fprofile-png%2F&psig=AOvVaw0yNOzAH_wzkB-jCoDaSTx5&ust=1710930994726000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMjvheOQgIUDFQAAAAAdAAAAABAI"
        }
    },{timestamps:true}
);
const User =mongoose.model('User', userSchema);

export default User;