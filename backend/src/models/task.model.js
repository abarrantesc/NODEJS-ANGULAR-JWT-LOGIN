import {Schema,model} from 'mongoose';

const taskShema = new Schema({
    name:{
        type:String,
        trim:true
    },
    status:{
        type:String,
        trim:true
    },
    priority:{
        type:String,
        trim:true
    },
    assigned:{
        type:String,
        trim:true
    }
},
{
    timestamps: true
})

module.exports = model('Taks',taskShema);