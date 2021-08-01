require('dotenv').config();
const express = require('express');
const app = express();
const http = require('http').createServer(app);







// Database connection
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('DB connected...');
}); 





app.use(express.static(__dirname + '/public'))

app.get('/',(req, res) => {
    res.render('index',)
    // res.sendFile(__dirname + '/index.html')
    
})



//socket
const io = require('socket.io')(http)

io.on('connection',(socket) =>{
    console.log('connection connected...')

    socket.on('message',(msg) =>{
        socket.broadcast.emit('message',msg)
        // io.emit('message',msg)

    })
})













http.listen(process.env.PORT,() =>console.log(`listening on port ${process.env.PORT}`))