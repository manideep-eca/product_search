const { Category } = require("../models");

exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.findAll({
            order: [["id", "DESC"]]
        });

        res.json(categories);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Error fetching categories"
        });
    }
};

exports.createCategory = async (req, res) => {
    try {
        const { category_name } = req.body;

        if (!category_name) {
            return res.status(400).json({
                message: "Category name is required"
            });
        }

        const category = await Category.create({
            category_name
        });

        res.status(201).json(category);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Error creating category"
        });
    }
};

exports.updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { category_name } = req.body;

        const category = await Category.findByPk(id);

        if (!category) {
            return res.status(404).json({
                message: "Category not found"
            });
        }

        await category.update({
            category_name
        });

        res.json(category);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Error updating category"
        });
    }
};

exports.deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;

        const category = await Category.findByPk(id);

        if (!category) {
            return res.status(404).json({
                message: "Category not found"
            });
        }

        await category.destroy();

        res.json({
            message: "Category deleted successfully"
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Error deleting category"
        });
    }
};