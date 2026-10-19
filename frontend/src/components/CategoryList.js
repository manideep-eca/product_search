import React from "react";
import axios from "axios";

function CategoryList({
    categories,
    getCategories
}) {
    const deleteCategory = async (id) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this category?"
        );

        if (!confirmed) {
            return;
        }

        try {
            await axios.delete(
                `http://localhost:5000/api/categories/${id}`
            );

            getCategories();
        } catch (error) {
            console.error(error);
            alert("Error deleting category");
        }
    };

    return (
        <div>
            <h2>Categories</h2>

            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Category Name</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {categories.map((category) => (
                        <tr key={category.id}>
                            <td>{category.id}</td>

                            <td>
                                {category.category_name}
                            </td>

                            <td>
                                <button
                                    onClick={() =>
                                        deleteCategory(
                                            category.id
                                        )
                                    }
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CategoryList;