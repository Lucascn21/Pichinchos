const mongo = require('mongodb').MongoClient //Del paquete, quiero el cliente
const dbConfig = { useNewUrlParser: true, useUnifiedTopology: true };
const url = 'mongodb://localhost:27017'

mongo.connect(url, dbConfig, (err, client) => { //Conecto a la db y veo si tengo el cliente
    if (!err) {
        //Tengo cliente asi que me conecto a la db
        const db = client.db('discografia') //Tomo la db
        const collection = db.collection('discos') // Tomo la coleccion discos

        //Consulta, devuelve toda la coleccion
        collection.find().toArray((err, items) => { //to array recibe un cb que recibe como parametro el resultado del procesamiento
                // console.log(items);
            })
            //Consulta, devuelve el primero que tiene nombre queseyo
        collection.findOne({ nombre: 'queseyo' }, (err, item) => {
                // console.log(item)
            })
            //No anda, esperaba que devuelva los dos primeros documentos
        collection.find({ canciones: 'cancion2' }).toArray((err, items) => {
            console.log(items)
        })
        client.close()
    } else {
        console.log("error" + err);
    }

});