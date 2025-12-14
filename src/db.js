const {Pool} = require('pg');

require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER,
    user: process.env.DB_HOST,
    user: process.env.DB_NAME,
    user: process.env.DB_PASSWORD,
    user: process.env.DB_PORT,
});

const query = (text, params) => pool.query(text, params);

pool.on('connect', ()=>{
    console.log('konek dengan databse berhasil')
});

pool.on('error', (err)=> {
    console.error('gagal menghubungkan dengan database', err);
    process.exit(-1);
})

module.exports= {
    query,
};