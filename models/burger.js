var orm = require("../config/orm");

var burger = {
    all: async function() {
        var data = await orm.selectAll("burgers");
        console.log(data);
        return data;
    },
    insert: async function (burger, devoured) {
        var data = await orm.insertOne("burgers", burger, devoured);
        return data;
    },
    update: async function (devoured, id) {
        var data = await orm.uptdateOne("burgers", devoured, id);
        return data;
    },
    delete: async function (id) {
        var data = await orm.deleteOne("burgers", id);
        console.log(data);
        return data;
    },
};

module.exports = burger;