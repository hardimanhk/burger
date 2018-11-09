var orm = require("../config/orm");

var burger = {
    all: async function() {
        var data = await orm.selectAll("burgers");
        return data;
    },
    insert: async function(burger, devoured) {
        var data = await orm.insertOne("burgers", burger, devoured);
        return data;
    },
    update: async function(burger, devoured, id) {
        var data = await orm.uptdateOne("burgers", burger, devoured, id);
        return data;
    },
};

module.exports = burger;