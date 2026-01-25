import React from "react";
import { useOutletContext, useNavigate, Link } from "react-router";

export default function OrderOnline() {
  const nav = useNavigate();
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cartTotal
  } = useOutletContext();
  return (
    <main className="order-online">
      <section className="cart">
        <header className="cart-header">
          <h1>Your Order</h1>
        </header>

        {cart.length === 0 ? (
          <div className="empty-cart">
           <p>Your cart is empty.</p>
           <p>Please select items from the <Link to="/menu">Menu</Link>.</p>
          </div>
        ) : (
          <ul className="cart-items">
            {cart.map((item) => (
              <li key={item.id}>
                <article className="cart-item">
                  <div className="cart-item-info">
                    <h2>{item.name}</h2>
                    <p>${item.price.toFixed(2)}</p>
                  </div>

                  <div className="cart-item-controls">
                    <button onClick={() => decreaseQuantity(item.id)}>
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button onClick={() => increaseQuantity(item.id)}>
                      +
                    </button>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      aria-label={`Remove ${item.name}`}
                    >
                      Remove
                    </button>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        )}

        {cart.length > 0 && (
          <footer className="cart-footer">
            <div className="cart-summary">
              <p>
                <strong>Total:</strong> ${cartTotal.toFixed(2)}
              </p>
            </div>
            <div className="cart-actions">
              <button onClick={() => nav("/menu")} className="checkout-button">Add More Items</button>
              <button className="checkout-button">
              Proceed to Checkout
            </button>
            </div>
          </footer>
        )}
      </section>
    </main>
  );
}
