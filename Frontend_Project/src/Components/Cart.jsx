function Cart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const updateQty = (id, change) => {
    const updated = cart.map(item =>
      item.id === id
        ? { ...item, qty: Math.max(1, item.qty + change) }
        : item
    );
    localStorage.setItem("cart", JSON.stringify(updated));
    window.location.reload();
  };

  const removeItem = (id) => {
    const updated = cart.filter(item => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updated));
    window.location.reload();
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>

      {cart.map(item => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.name} />
          <div>
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <div>
              <button onClick={() => updateQty(item.id, -1)}>-</button>
              <span> {item.qty} </span>
              <button onClick={() => updateQty(item.id, 1)}>+</button>
            </div>
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </div>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>
    </div>
  );
}

export default Cart;
