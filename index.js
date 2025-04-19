const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDb = require('./config/db');
dotenv.config();
const blogRoutes = require('./routes/blogRoutes');
const PORT = process.env.PORT || 3000;

//* connect server with data base
connectDb();

//* middleware
app.use(express.json());

//* API Mount
app.use("/api/v1",blogRoutes);

app.listen(PORT, ()=>{
    console.log(`server running at ${PORT}`);
})

//* Default route
app.get('/', (req,res)=>{
    res.send('Server is working!');
});