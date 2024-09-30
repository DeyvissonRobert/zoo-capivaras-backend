const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',  
    user: 'root',       
    password: '40028922', 
    database: 'capivaras_db' 
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    } else {
        console.log('Conectado ao banco de dados MySQL');
    }
});

module.exports = connection;
