import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://abarrantes:Suma1234567890@cluster0-10nkv.mongodb.net/test';
mongoose.set('useFindAndModify', false);
mongoose.connect(MONGODB_URI || process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(db => console.log('MongoDb is connected'))