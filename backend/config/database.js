const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "product_category_management",
    "root",
    "root",
    {
        host: "localhost",
        dialect: "mysql"
    }
);

module.exports = sequelize;