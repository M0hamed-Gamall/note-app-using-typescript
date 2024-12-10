import mongoose from 'mongoose';
async function connectDB():Promise<boolean>{
    const URL:string = process.env.DB_URL as string;
    try{
        await mongoose.connect(URL);
        console.log("connect to database");
        return true;
    }catch(err){
        console.error("can't connect to database because :" ,err)
        return false;
    }
}

export default connectDB;