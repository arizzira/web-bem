const db = require('../db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const login = async (req, res) =>{
    const {username, password} = req.body;
    try{
        const userResult = await db.query(
            'SELECT u.*, r.role_name FROM Users u JOIN Roles r ON u.role_id = r.id WHERE u.username = $1', [username]
        );
        const user = userResult.rows[0];
        if(!user){
            return res.status(401).josn({msg: 'kredensial tidak valid'});
        }
        if(!isMatch){
            return res.status(401).json({msg:'Kredensial tidak valid'});
        }
    },
};