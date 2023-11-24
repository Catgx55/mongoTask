const {MongoClient} = require('mongodb');
require("dotenv").config();

const url = process.env.URL;

const main = async() => {
    const client = new MongoClient(url);

    await client.connect();

    return client.db('Tareas').collection('lista');
};

module.exports = main;