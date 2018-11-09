var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
    selectAll: function (tableInput) {
        return new Promise(function (resolve, reject) {
            var queryString = "SELECT * FROM ??";
            connection.query(queryString, [tableInput], function (err, result) {
                if (err) return reject(err);
                resolve(result);
            });
        });
    },
    insertOne: function (tableInput, burger, devoured) {
        return new Promise(function (resolve, reject) {
            var queryString = "INSERT INTO ?? VALUES (?, ?)";
            connection.query(queryString, [tableInput, burger, devoured], function (err, result) {
                if (err) return reject(err);
                resolve(result);
            });
        });
    },
    uptdateOne: function (tableInput, burger, devoured, id) {
        return new Promise(function (resolve, reject) {
            var queryString =
                "UPDATE ?? SET burger_name = ?, devoured = ? WHERE id = ?";
            connection.query(queryString, [tableInput, burger, devoured, id], function (err, result) {
                if (err) return reject(err);
                resolve(result);
            });
        });
    }
};

module.exports = orm;