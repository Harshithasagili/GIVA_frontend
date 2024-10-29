// src/components/ProductItem.js
// src/components/ProductItem.js
import React, { useState } from 'react';

function ProductItem({ product, onEditProduct, onDeleteProduct }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState(product);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const handleSave = () => {
    onEditProduct(editedProduct);
    setIsEditing(false);
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        {isEditing ? (
          <>
            <input
              type="text"
              name="name"
              className="form-control mb-2"
              value={editedProduct.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="description"
              className="form-control mb-2"
              value={editedProduct.description}
              onChange={handleChange}
            />
            <input
              type="number"
              name="price"
              className="form-control mb-2"
              value={editedProduct.price}
              onChange={handleChange}
            />
            <input
              type="number"
              name="quantity"
              className="form-control mb-2"
              value={editedProduct.quantity}
              onChange={handleChange}
            />
            <button className="btn btn-success" onClick={handleSave}>
              Save
            </button>
          </>
        ) : (
          <>
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">Price: ${product.price}</p>
            <p className="card-text">Quantity: {product.quantity}</p>
            <button
              className="btn btn-primary me-2"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() => onDeleteProduct(product.id)}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ProductItem;
