const express = require('express');
const dotenv= require('dotenv');
const morgan =require('morgan');
const bodyparser= require('body-parser');
const path= require('path');

const connectBD= require('./server/database/connection');

const app = express();

dotenv.config({path:'config.env'})
const port = process.env.port||8080

// log request
app.use(morgan('tiny'));

// parse request to body-parser
app.use(express.json());

// ConnectionBD
connectBD();

// Set view engine
app.set('view engine','ejs');
// app.set('views',path.resolve(__dirname,'views/ejs'));

// load assets
app.use('/css',express.static(path.resolve(__dirname,'assets/css')));;
app.use('/img',express.static(path.resolve(__dirname,'assets/img')));;
app.use('/js',express.static(path.resolve(__dirname,'assets/js')));;

// Load router
app.use('/',require('./server/routers/router'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})


