require('dotenv').config();

const Config ={
    dbPort: process.env.DB_PORT,
    dbHost: process.env.DB_HOST,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME
}
module.exports = {Config};