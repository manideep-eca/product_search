import React, { useState } from "react";
import axios from "axios";

function ProductForm({
    categories,
    getProducts
}) {
    const [product, setProduct] = useState({
        product_name: "",
        category_id: "",
        price: "",
        stock: ""
    });

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(
                "http://localhost:5000/api/products",
                {
                    ...product,
                    category_id: Number(product.category_id),
                    price: Number(product.price),
                    stock: Number(product.stock)
                }
            );

            setProduct({
                product_name: "",
                category_id: "",
                price: "",
                stock: ""
            });

            getProducts();
        } catch (error) {
            console.error(error);
            alert("Error adding product");
        }
    };

    return (
        <div>
            <h2>Add Product</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="product_name"
                    placeholder="Product Name"
                    value={product.product_name}
                    onChange={handleChange}
                />

                <br />

                <select
                    name="category_id"
                    value={product.category_id}
                    onChange={handleChange}
                >
                    <option value="">
                        Select Category
                    </option>

                    {categories.map((category) => (
                        <option
                            key={category.id}
                            value={category.id}
                        >
                            {category.category_name}
                        </option>
                    ))}
                </select>

                <br />

                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={product.price}
                    onChange={handleChange}
                    min={0}
                />

                <br />

                <input
                    type="number"
                    name="stock"
                    placeholder="Stock"
                    value={product.stock}
                    onChange={handleChange}
                    min={0}
                />

                <br />

                <button type="submit">
                    Add Product
                </button>
            </form>
        </div>
    );
}

export default ProductForm;