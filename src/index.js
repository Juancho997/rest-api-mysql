const express = require('express');
const morgan = require('morgan');
require('dotenv').config()

const app = express();
app.use(express.json());
app.use(morgan('dev'));

app.use(require('./routes/employees'))


app.listen(process.env.PORT, ()=>{
    console.log(`Server on port ${process.env.PORT}`)
})