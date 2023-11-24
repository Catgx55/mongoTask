const {Router} = require('express');
const main = require('../db');

const route = Router();

route.post('/crear', async(req, res) => {
    const tarea = req.body;
    try{
        const collection = await main();
        const data = await collection.insertOne(tarea)
        res.json(data);
    }catch(err){
        console,log(err);
        res.json(err)
    }
});

route.get('/lista', async(req, res) => {
    try{
        const collection = await main();
        const data = await collection.find({}).toArray();
        res.json(data);
    }catch(err){
        console.log(err);
        res.json(err);
    }
});

route.put('/actualizar/:titulo', async(req, res) => {
    const {nombre} = req.params;
    const rol = req.body;
    try{
        const collection = await main();
        const data = await collection.updateOne(
            {name: nombre},
            {$set: rol}
        );
        res.json(data);
    }catch(err){
        console.log(err);
        res.json(err);
    }
})

route.delete('/eliminar/:titulo', async(req, res) => {
    const {titulo} = req.params;
    try{
        const collection = await main();
        const data = await collection.deleteOne({titulo});
        res.json(data);
    }catch(err){
        res.json(err)
    }
})

module.exports = route;

//buscar el usuario, con un find.