require('dotenv').config();
const express = require('express');
const app = express();
const http = require('http').createServer(app);


















http.listen(process.env.PORT,() =>console.log(`listening on port ${process.env.PORT}`))