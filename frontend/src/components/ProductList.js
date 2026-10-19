import React from "react";

function ProductList({
    products,
    getProducts
}) {
    return (
        <div>
            <h2>Products</h2>

            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Stock</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>
                                {product.id}
                            </td>

                            <td>
                                {product.product_name}
                            </td>

                            <td>
                                {product.Category
                                    ? product.Category.category_name
                                    : "No Category"}
                            </td>

                            <td>
                                {product.price}
                            </td>

                            <td>
                                {product.stock}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductList;