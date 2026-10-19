const express = require("express");
const cors = require("cors");

const sequelize = require("./config/database");

require("./models");

const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Product Category API Running");
});

app.use("/api/categories", categoryRoutes);

app.use("/api/products", productRoutes);

sequelize
    .authenticate()
    .then(() => {
        console.log("MySQL connected successfully");

        return sequelize.sync();
    })
    .then(() => {
        console.log("Database synchronized");

        app.listen(5000, () => {
            console.log(
                "Server running on http://localhost:5000"
            );
        });
    })
    .catch((error) => {
        console.error(
            "Database connection failed:",
            error
        );
    });