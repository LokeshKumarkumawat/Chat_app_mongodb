require('dotenv').config();
const express = require('express');
const app = express();
const http = require('http').createServer(app);



app.use(express.static(__dirname + '/public'))

app.get('/',(req, res) => {
    res.render('index',)
    res.end();
})














http.listen(process.env.PORT,() =>console.log(`listening on port ${process.env.PORT}`))