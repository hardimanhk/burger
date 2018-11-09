var connection = require("./connection");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
    selectAll: function (tableInput) {
        return new Promise(function (resolve, reject) {
            var queryString = "SELECT * FROM ??;";
            connection.query(queryString, [tableInput], function (err, result) {
                if (err) return reject(err);
                resolve(result);
            });
        });
    },
    insertOne: function (tableInput, burger, devoured) {
        return new Promise(function (resolve, reject) {
            var queryString = "INSERT INTO ?? VALUES (NULL, ?, ?);";
            connection.query(queryString, [tableInput, burger, devoured], function (err, result) {
                if (err) return reject(err);
                resolve(result);
            });
        });
    },
    uptdateOne: function (tableInput, devoured, id) {
        return new Promise(function (resolve, reject) {
            var queryString =
                "UPDATE ?? SET devoured = ? WHERE id = ?;";
            connection.query(queryString, [tableInput, devoured, id], function (err, result) {
                if (err) return reject(err);
                resolve(result);
            });
        });
    },
    deleteOne: function (tableInput, id) {
        return new Promise(function (resolve, reject) {
            var queryString = "DELETE FROM ?? WHERE id = ?;";
            console.log(queryString);
            connection.query(queryString, [tableInput, id], function (err, result) {
                if (err) return reject(err);
                resolve(result);
            });
        });
    },
};

module.exports = orm;