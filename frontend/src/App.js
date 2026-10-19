import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import CategoryForm from "./components/CategoryForm";
import CategoryList from "./components/CategoryList";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

function App() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    const getCategories = async () => {
        const response = await axios.get(
            "http://localhost:5000/api/categories"
        );

        setCategories(response.data);
    };

    const getProducts = async () => {
        const response = await axios.get(
            "http://localhost:5000/api/products"
        );

        setProducts(response.data);
    };

    useEffect(() => {
        getCategories();
        getProducts();
    }, []);

    return (
    <div className="container">
        <h1>Product Category Management</h1>

        <div className="section">
            <CategoryForm getCategories={getCategories} />
        </div>

        <div className="section">
            <CategoryList
                categories={categories}
                getCategories={getCategories}
            />
        </div>

        <div className="section">
            <ProductForm
                categories={categories}
                getProducts={getProducts}
            />
        </div>

        <div className="section">
            <ProductList
                products={products}
                getProducts={getProducts}
            />
        </div>
    </div>
);
}

export default App;