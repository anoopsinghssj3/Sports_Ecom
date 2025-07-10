// src/components/ProductGrid.jsx
import React from 'react';

function ProductGrid({ title, products }) {
  return (
    <div className="container my-5">
      {title && <h3 className="mb-4">{title}</h3>}
      <div className="row">
        {products.map((product, index) => (
          <div className="col-6 col-md-3 mb-4" key={index}>
            <div className="card shadow-sm border-0" style={{ backgroundColor: "var(--bg-card)", color: "var(--text-main)" }}>
              <img src={product.image} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h6>{product.title}</h6>
                <p>₹{product.price}</p>
                <button className="btn btn-primary btn-sm">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
