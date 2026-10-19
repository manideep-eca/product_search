const Category = require("./Category");
const Product = require("./Product");

Category.hasMany(Product, {
    foreignKey: "category_id",
    onDelete: "CASCADE"
});

Product.belongsTo(Category, {
    foreignKey: "category_id"
});

module.exports = {
    Category,
    Product
};