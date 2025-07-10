import React from 'react';
import './ProductGrid.css';

function ProductGrid({ title, products }) {
  return (
    <div className="container my-4 product-grid">
      {title && <h3 className="mb-4 text-center">{title}</h3>}
      <div className="row">
        {products.map((product, index) => (
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
            <div
              className="card h-100 shadow-sm border-0"
              style={{ backgroundColor: "var(--bg-card)", color: "var(--text-main)" }}
            >
              <div className="product-image-wrapper">
                <img src={product.image} alt={product.title} className="product-image" />
              </div>
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h6 className="fw-semibold">{product.title}</h6>
                  <p className="mb-2">₹{product.price}</p>
                </div>
                <button className="btn btn-primary btn-sm mt-auto">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
