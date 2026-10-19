const { Product, Category } = require("../models");

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.findAll({
            include: {
                model: Category,
                attributes: ["id", "category_name"]
            },
            order: [["id", "DESC"]]
        });

        res.json(products);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Error fetching products"
        });
    }
};

exports.createProduct = async (req, res) => {
    try {
        const {
            product_name,
            category_id,
            price,
            stock
        } = req.body;

        if (
            !product_name ||
            category_id === undefined ||
            price === undefined ||
            stock === undefined
        ) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const category = await Category.findByPk(category_id);

        if (!category) {
            return res.status(400).json({
                message: "Invalid category"
            });
        }

        const product = await Product.create({
            product_name,
            category_id,
            price,
            stock
        });

        res.status(201).json(product);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Error creating product"
        });
    }
};