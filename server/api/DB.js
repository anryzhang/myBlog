/**
 * Created by ziyu on 2017/9/11.
 * path by
 */
"use strict";

const config = require('./dataBaseConfig');
const mysql = require('mysql');
// console.log(config);
const DB = mysql.createPool({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.db,
    connectionLimit:10
});

module.exports = DB;