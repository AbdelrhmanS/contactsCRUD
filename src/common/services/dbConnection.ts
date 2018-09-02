const mysql = require('mysql');

const DBConnection = mysql.createConnection({
	host: 'localhost',
	user     : 'root',
	password : '123456',
	database: 'task'
});

export default DBConnection;