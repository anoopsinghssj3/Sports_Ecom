import React from 'react';

export default function CartItem({ item, onRemove, onUpdateQty }) {
  const { id, name, image, price, quantity } = item;

  return (
    <div className="d-flex justify-content-between align-items-center border-bottom py-2">
      <div className="d-flex align-items-center">
        <img src={image} alt={name} width="60" className="me-3 rounded" />
        <div>
          <h6 className="mb-1">{name}</h6>
          <p className="mb-0 text-muted">₹{price} × {quantity} = ₹{price * quantity}</p>
        </div>
      </div>

      <div className="d-flex align-items-center">
        <button className="btn btn-sm btn-outline-secondary me-1" onClick={() => onUpdateQty(id, quantity - 1)}>-</button>
        <span>{quantity}</span>
        <button className="btn btn-sm btn-outline-secondary ms-1" onClick={() => onUpdateQty(id, quantity + 1)}>+</button>

        <button className="btn btn-sm btn-danger ms-3" onClick={() => onRemove(id)}>Remove</button>
      </div>
    </div>
  );
}
