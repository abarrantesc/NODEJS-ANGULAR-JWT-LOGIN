import {Schema,model}from 'mongoose';
import bcryptjs from 'bcryptjs'

const userSchema = new Schema({
    email:{
        type:String,
        trim: true,
    },
    password:{
        type:String,
        trim: true,
    },
},
{
    timestamps: true
});

userSchema.methods.encryptPassword = async (password) => {
    const salt = await bcryptjs.genSalt(10);
    return bcryptjs.hash(password, salt);
};

userSchema.methods.comparePassword = async function (password) {
    return bcryptjs.compareSync(password, this.password);
};

module.exports = model('User',userSchema);