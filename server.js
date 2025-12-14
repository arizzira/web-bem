const express=require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

require('./src/db');

app.get('/', (req,res)=>{
    res.send('absensi BEM API berjalan')
});

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
});