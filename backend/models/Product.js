const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Product = sequelize.define(
    "Product",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        product_name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },

        stock: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        tableName: "products",
        timestamps: false
    }
);

module.exports = Product;