import React from "react";
import { useParams, Link } from "react-router-dom";
import ProductCard from "../Product/ProductCard";
import modularcss from "./Category.module.css";

function CategoryProducts({ products = [], categories = [] }) {
const { categoryId } = useParams();
const catId = Number(categoryId);

// Find category
const category = categories.find((c) => c.id === catId);

// Filter products safely (cast categoryId to number)
const filteredProducts = products.filter(
(p) => Number(p.categoryId) === catId
);

if (!category) {
return <h2>Category not found</h2>;
}

return (
<div className={modularcss.category_products_container}>
    <h2>Category: {category.name}</h2>

    <Link to="/category" className={modularcss.back_link}>
    ← Back to Categories
    </Link>

    <div className={modularcss.products_grid}>
    {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
        ))
    ) : (
        <p>No products found in this category.</p>
    )}
    </div>
</div>
);
}

export default CategoryProducts;
