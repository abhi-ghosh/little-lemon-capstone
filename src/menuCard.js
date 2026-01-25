import React from 'react';
export default function MenuCard({ item, cartData }) {
    const {
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = cartData;
  const cartItem = cart.find(c => c.id === item.id);
  return (
    <div key={item.id} className="menu-item-card">
      <div className="image-container">
        <img className="menu-item-image" src={item.image} alt={item.name} />
      </div>
      <div className='nameandprice'>
        <h3>{item.name}</h3>
        <p>${item.price.toFixed(2)}</p>
      </div>
      <p className='menu-item-description'>{item.description}</p>
      <div className="menu-item-details">
        <p>{item.calories} cal</p>
        {!cartItem ? (<button onClick={() => addToCart(item)} className="add-to-order-button">Add to Order</button>):(
          <div className='added-to-order'>
            <div className='trio'>
              <button onClick={() => decreaseQuantity(item.id)} className="minus">-</button>
              <p className="quantity">{cartItem.quantity}</p>
              <button onClick={() => increaseQuantity(item.id)} className="plus">+</button>
            </div>
            <button onClick={() => removeFromCart(item.id)} className="rem">Remove</button>
          </div>
        )}
      </div>
    </div>
  );
}
