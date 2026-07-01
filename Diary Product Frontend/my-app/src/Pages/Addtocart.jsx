import { useState, useEffect } from "react";
import axios from "axios";
import { FaTrash, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Addtocart.css";

function Addtocart() {
  const [cart, setCart] = useState({ items: [], total_amount: 0, total_items: 0 });
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");
  const headers = { Authorization: `Token ${token}` };

  const fetchCart = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/cart/", { headers });
      setCart(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const updateQty = async (itemId, action) => {
    const res = await axios.post(
      `http://127.0.0.1:8000/api/cart/update/${itemId}/`,
      { action },
      { headers }
    );
    setCart(res.data);
  };

  const removeItem = async (itemId) => {
    const res = await axios.delete(
      `http://127.0.0.1:8000/api/cart/remove/${itemId}/`,
      { headers }
    );
    setCart(res.data);
  };

  const clearCart = async () => {
    await axios.delete("http://127.0.0.1:8000/api/cart/clear/", { headers });
    fetchCart();
  };

  if (loading) return <p className="text-center mt-5">Loading cart...</p>;

  const deliveryCharge = cart.total_amount >= 499 ? 0 : 40;
  const savedAmount = cart.total_amount >= 499 ? 40 : 0;

  if (cart.items.length === 0) {
    return (
      <div className="container text-center py-5">
        <h3>Your cart is empty 🛒</h3>
        <a href="/" className="btn btn-primary mt-3">Continue Shopping</a>
      </div>
    );
  }

  return (
    <div className="cart-page container py-4">

      <div className="breadcrumb mb-2">
        <a href="/">Home</a> &gt; <span>Your Cart</span>
      </div>

      <div className="cart-header d-flex justify-content-between align-items-center mb-3">
        <div>
          <h2>Your Cart <span className="item-count">({cart.total_items} Items)</span></h2>
          <p className="text-muted">Review your items and proceed to checkout</p>
        </div>
        <a href="/" className="continue-link"><FaArrowLeft /> Continue Shopping</a>
      </div>

      <div className="row">
        {/* LEFT - Cart Items */}
        <div className="col-md-8">
          <div className="cart-items-box">
            {cart.items.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.product.image} alt={item.product.name} />
                <div className="item-info">
                  <h5>{item.product.name}</h5>
                  <p className="unit">{item.product.unit}</p>
                </div>
                <div className="item-price">₹{item.product.price}</div>
                <div className="qty-control">
                  <button onClick={() => updateQty(item.id, "decrease")}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQty(item.id, "increase")}>+</button>
                </div>
                <div className="item-subtotal">₹{item.subtotal.toFixed(2)}</div>
                <button className="remove-btn" onClick={() => removeItem(item.id)}>
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-between mt-3">
            <a href="/" className="btn btn-outline-secondary">
              <FaArrowLeft className="me-2" /> Continue Shopping
            </a>
            <button className="btn btn-outline-danger" onClick={clearCart}>
              <FaTrash className="me-2" /> Clear Cart
            </button>
          </div>
        </div>

        {/* RIGHT - Order Summary */}
        <div className="col-md-4">
          <div className="order-summary-box">
            <h4>Order Summary</h4>
            <div className="summary-row">
              <span>Subtotal ({cart.total_items} Items)</span>
              <span>₹{cart.total_amount.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Delivery Charges</span>
              <span>
                {deliveryCharge === 0 ? (
                  <><s>₹40.00</s> <span className="text-success">FREE</span></>
                ) : (
                  `₹${deliveryCharge}`
                )}
              </span>
            </div>
            {savedAmount > 0 && (
              <div className="summary-row text-success">
                <span>You Save</span>
                <span>-₹{savedAmount}.00</span>
              </div>
            )}
            <hr />
            <div className="summary-row total-row">
              <span>Total Amount</span>
              <span>₹{(cart.total_amount + deliveryCharge).toFixed(2)}</span>
            </div>

            {savedAmount > 0 && (
              <div className="saved-banner">
                🎉 You saved ₹{savedAmount}.00 on delivery!
              </div>
            )}

            <button className="checkout-btn">
              Proceed to Checkout <FaArrowRight />
            </button>
            <p className="secure-text">🛡 Secure Checkout</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Addtocart;