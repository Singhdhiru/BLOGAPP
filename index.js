const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDb = require('./config/db');
dotenv.config();

const PORT = process.env.PORT || 3000;
//* connect server with data base
connectDb();

app.listen(PORT, ()=>{
    console.log(`server running at ${PORT}`);
})

//* Default route
app.get('/', (req,res)=>{
    res.send('Server is working!');
});