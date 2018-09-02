"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require('mysql');
const DBConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'task'
});
exports.default = DBConnection;
//# sourceMappingURL=dbConnection.js.map