import mongoose from "mongoose";


export const Connection= async(username, password)=>{
    const URL=`mongodb://${username}:${password}@ac-lrcf5vd-shard-00-00.vgs9knm.mongodb.net:27017,ac-lrcf5vd-shard-00-01.vgs9knm.mongodb.net:27017,ac-lrcf5vd-shard-00-02.vgs9knm.mongodb.net:27017/?ssl=true&replicaSet=atlas-e4rh0f-shard-0&authSource=admin&retryWrites=true&w=majority`

    try{
await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
console.log("database connected Successfully")
    }catch(error){
        console.log("Error while Connecting with the databae", error.message)
    }
}

export default Connection;