//Server accepting requests

let express = require('express');


let server=express();
server.listen(8888);
console.log('Server is running on port 8888');
let count=0;

server.get('/', function(req, res){
    count++;
    console.log("Client connected from "+req.connection.remoteAddress);
    let replyString = "Total amount of connections: "+count;
    console.log(replyString);
    res.send(replyString);

});