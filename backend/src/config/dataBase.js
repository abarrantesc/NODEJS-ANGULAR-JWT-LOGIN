import mongoose from 'mongoose';

const MONGODB_URI = 'you connection string';
mongoose.set('useFindAndModify', false);
mongoose.connect(MONGODB_URI || process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(db => console.log('MongoDb is connected'))