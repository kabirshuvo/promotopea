import mongoose from "mongoose";

let isConnected = false; //to trac the connection

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log('MongoDB is already connected');
        return
}

try{
    await mongoose.connect(process.env.MONGODB_URI, {
        dbName: "promotopea_db",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    isConnected = true;

    console.log('MongoDb Connected')

} catch (error){
console.log(error);
}

}


