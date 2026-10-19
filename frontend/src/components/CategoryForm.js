import React, { useState } from "react";
import axios from "axios";

function CategoryForm({ getCategories }) {
    const [categoryName, setCategoryName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!categoryName.trim()) {
            alert("Please enter category name");
            return;
        }

        await axios.post(
            "http://localhost:5000/api/categories",
            {
                category_name: categoryName
            }
        );

        setCategoryName("");

        getCategories();
    };

    return (
        <div>
            <h2>Add Category</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Category Name"
                    value={categoryName}
                    onChange={(e) =>
                        setCategoryName(e.target.value)
                    }
                />

                <button type="submit">
                    Add Category
                </button>
            </form>
        </div>
    );
}

export default CategoryForm;