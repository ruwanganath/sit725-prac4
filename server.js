const MongoClient = require('mongodb').MongoClient;
var express = require('express'),
    app = express();

var port = process.env.PORT || 3000;   

const uri = "mongodb+srv://sit725:sit725@sit725.gwuvj.mongodb.net/messageboard?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});

app.use(express.static(__dirname +'/public'));

var collectionMessage;

client.connect(err => {
  collectionMessage = client.db("messageboard").collection("messages");
});

const insertMessage=(message)=>{
    collectionMessage.insertOne({message:message});
}

const retrieveMessages=(res)=>{
    collectionMessage.find().toArray(function(err,result){
        if(err) throw err;
        res.send(result)
    });
}

app.get('/message',function(req,res){
    let message = req.query.message
    insertMessage(message)
    res.send('Message added')
})

app.get('/messages',function(req,res){
    retrieveMessages(res)
})

app.listen(port);
console.log('Server listening on : '+port);