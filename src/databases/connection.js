import sql from 'mssql';
import { config } from "dotenv"
config();

const sqlConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    server: 'localhost',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true, // for azure
        trustServerCertificate: false // change to true for local dev / self-signed certs
    }
}

export async function getConnection(){
    try {
        const pool = await sql.connect(sqlConfig);
        return pool;    
    } catch (err) {
        console.error(err)
    }
}

export {sql};