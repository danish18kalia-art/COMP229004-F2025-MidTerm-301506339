require('dotenv').config()
const mongoose = require('mongoose');
let ConnectionString = "mongodb+srv://danish18kalia_db_user:Danishkalia.21@cluster0.94frhv2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

module.exports = function(){

    mongoose.connect(ConnectionString);

    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error: '));
    mongodb.once('open', ()=>{
        console.log('====> Connected to MongoDB.');
    })

    return mongodb;
}
