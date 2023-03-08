const mysql = require('mysql');

const {Config:{dbPassword,dbUser,dbName,dbPort,dbHost}} = require('./../config/config');

const USER = encodeURIComponent(dbUser);
const PASSWORD = encodeURIComponent(dbPassword);
const URI = `mysql://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`

const pool =  mysql.createPool(URI);

console.log(URI);

pool.getConnection((err,connection) =>{
    if (err) {
        console.log('i have error' + err)
    }
    if (connection) connection.release();
    console.log('connected :)')
 
});

//pool.query = promisify(pool.query);
module.exports = {pool};


