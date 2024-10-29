// src/components/ProductForm.js
import React, { useState } from 'react';

function ProductForm({ onAddProduct }) {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    quantity: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(product);
    setProduct({ name: '', description: '', price: '', quantity: '' });
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group mt-2">
        <input
          type="text"
          name="description"
          className="form-control"
          placeholder="Description"
          value={product.description}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group mt-2">
        <input
          type="number"
          name="price"
          className="form-control"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group mt-2">
        <input
          type="number"
          name="quantity"
          className="form-control"
          placeholder="Quantity"
          value={product.quantity}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        Add Product
      </button>
    </form>
  );
}

export default ProductForm;
