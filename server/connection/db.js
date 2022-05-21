import mongoose from 'mongoose';

const Connection = async (username, password) => {
    try {   
        const URL = `mongodb://${username}:${password}@webdevmern-shard-00-00.fferf.mongodb.net:27017,webdevmern-shard-00-01.fferf.mongodb.net:27017,webdevmern-shard-00-02.fferf.mongodb.net:27017/?ssl=true&replicaSet=atlas-yufyh0-shard-0&authSource=admin&retryWrites=true&w=majority`
        await mongoose.connect(URL, { useNewUrlParser: true })
        
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;