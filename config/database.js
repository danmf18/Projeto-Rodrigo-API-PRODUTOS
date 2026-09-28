import mysql from 'mysql2/promise';

export function criarPool(){
    return mysql.createPool({
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        waitForConnections: true, // permite fila, ser estiver False, as 11 conexão retona erro
        connectionLimit: 10, // limite maximo de conexões simultaneas
        queueLimit: 0 //
    })
}