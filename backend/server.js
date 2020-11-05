const fs = require('fs')
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const Binary = require('mongodb').Binary
const app = express();

app.use(cors());
app.use(bodyParser.json())

app.post('/data', (req, res) => {
    console.log("Got a request");
    let bufferData = [];
    MongoClient.connect("mongodb://localhost:27017/admin", 
    { useUnifiedTopology: true }, (err, newDb) => {
        if(err) console.log("error!");
        const db = newDb.db('eschoolkit');
        const collection = db.collection(String(req.body.uid));
        collection.find({}).toArray((err, docs) => {
            if(err) console.log("ERROR")
            for(let i = 0; i < docs.length; i++) {
                // fs.writeFileSync(`${i}.jpeg`, docs[i].fileData.buffer, err => {
                //     err ? console.log("Error") : console.log("Created image");;
                // })
                bufferData.push(docs[i].fileData)
            }
            res.send(bufferData)
        }) 
        
    })
})
app.post('/', (req, res) => {
    console.log(req.body.base64.slice(20, 30))
    let base64Image = req.body.base64.split(';base64,').pop();
    fs.writeFileSync('./image.jpg', base64Image, { encoding: 'base64' }, (err, result) => {
        if(err) console.log("Error")
        else console.log("File Created")
    })
    let file = fs.readFileSync("./image.jpg")
    let insertData = {}
    insertData.fileData = Binary(file)
    MongoClient.connect("mongodb://localhost:27017/admin", {useUnifiedTopology: true}, (err, newDb) => {
        if(err) console.log(err);
        else console.log("Connected to DB")
        let db =  newDb.db("eschoolkit");
        let collection =  db.collection(String(req.body.uid))
        // collection.insertOne(insertData)  
    })
})

app.listen(3001, () => console.log("Listening in port 3001"))