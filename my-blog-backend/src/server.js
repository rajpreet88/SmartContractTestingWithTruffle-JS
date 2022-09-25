const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/hello', (req,res)=>{
    res.send('Hello World!')
})

app.post('/hello', (req,res)=>{
    res.send(`My name is ${req.body.name} `)
})

app.listen(8000, ()=>{
    console.log("Server is listening on port 8000");
})