const mysql = require('mysql');

const connection = mysql.createConnection({
    password: 'Trabalho1!',
    user: 'pds13@barbershop-pds',
    database: 'barbershop',
    host: 'barbershop-pds.mysql.database.azure.com',
    port: '3306'
});

connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});

module.exports = connection;
