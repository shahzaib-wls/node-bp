import mongoose from 'mongoose';
 
export const db = mongoose.connect(process.env.MONGO_URI|| 'mongodb://localhost:27017/steam', {
 
})
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.log(err);
});


 