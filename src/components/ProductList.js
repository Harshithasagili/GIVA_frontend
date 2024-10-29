// src/components/ProductList.js
import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products, onEditProduct, onDeleteProduct }) {
  if (products.length === 0) {
    return <p className="text-center">No products available. Add some!</p>;
  }

  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-4" key={product.id}>
          <ProductItem
            product={product}
            onEditProduct={onEditProduct}
            onDeleteProduct={onDeleteProduct}
          />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
