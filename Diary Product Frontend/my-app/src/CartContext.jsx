import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const API = "http://127.0.0.1:8000/api";
const emptyCart = { items: [], total_amount: 0, total_items: 0 };

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(emptyCart);

  const getHeaders = () => ({
    Authorization: `Token ${localStorage.getItem("token")}`,
  });

  const fetchCart = async () => {
    if (!localStorage.getItem("token")) {
      setCart(emptyCart);
      return;
    }
    try {
      const res = await axios.get(`${API}/cart/`, { headers: getHeaders() });
      setCart(res.data);
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const addToCart = async (product) => {
    if (!localStorage.getItem("token")) {
      alert("Please login first!");
      return;
    }
    try {
      const res = await axios.post(
        `${API}/cart/add/`,
        { product_id: product.id, quantity: 1 },
        { headers: getHeaders() }
      );
      setCart(res.data);
      alert("Added to cart!");
    } catch (err) {
      console.log(err.response?.data || err.message);
      alert("Failed to add to cart");
    }
  };

  const updateQty = async (itemId, action) => {
    const res = await axios.post(
      `${API}/cart/update/${itemId}/`,
      { action },
      { headers: getHeaders() }
    );
    setCart(res.data);
  };

  const removeFromCart = async (itemId) => {
    const res = await axios.delete(`${API}/cart/remove/${itemId}/`, {
      headers: getHeaders(),
    });
    setCart(res.data);
  };

  const clearCart = async () => {
    await axios.delete(`${API}/cart/clear/`, { headers: getHeaders() });
    setCart(emptyCart);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: cart.items,
        cartCount: cart.total_items,
        cartTotal: cart.total_amount,
        addToCart,
        updateQty,
        removeFromCart,
        clearCart,
        fetchCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}