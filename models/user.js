const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        mainlength: 8,
        required: true,
    },
    role: {
        type: String,
        default: "basic",
        required: true,
    },
})

userSchema.pre('save', async function(next) {
    try{
        const user = this;
        if(!user.isModified('password')) next();
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
})

const user = mongoose.model("user", userSchema)
module.exports = user