import mysql from 'mysql';
import { config } from "dotenv"
config();

const sqlConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    host: 'localhost',
    ssl  : {
        rejectUnauthorized: false
    }
}

export async function getConnection(){
    try {
        const pool = mysql.createConnection(sqlConfig);
        return pool;
    } catch (err) {
        console.error(err)
    }
}

export {mysql};