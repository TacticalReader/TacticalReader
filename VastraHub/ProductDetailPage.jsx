import React, { useState } from 'react';

const ProductDetailPage = () => {
    const [size, setSize] = useState('');  // Initialize size state
    const [color, setColor] = useState('');  // Initialize color state

    const handleAddToCart = () => {
        if (!size) {
            alert('Please select a size before adding to cart.');
            return;
        }
        // Add to cart logic
    };

    return (
        <div>
            <h1>Product Details</h1>
            <select onChange={(e) => setSize(e.target.value)}>
                <option value="" disabled>Select Size</option>
                <option value="S">Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
            </select>
            <select onChange={(e) => setColor(e.target.value)}>
                <option value="" disabled>Select Color</option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Green">Green</option>
            </select>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductDetailPage;