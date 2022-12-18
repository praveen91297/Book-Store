const mysql = require('mysql');

function createDatabase() {
    const connection = mysql.createConnection({
        host: 'localhost',
        port: '3308',
        user: 'root',
        password: 'root',
        database: 'praveen'
    });

    connection.connect((err) => {
        if(err) {
            console.log('Error ==>> ', err);
        } else {
            console.log('Database connected successfully!');
        }
    });

    return connection;
}

module.exports = createDatabase;