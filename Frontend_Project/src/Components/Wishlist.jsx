function Wishlist() {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  const removeItem = (id) => {
    const updated = wishlist.filter(item => item.id !== id);
    localStorage.setItem("wishlist", JSON.stringify(updated));
    window.location.reload();
  };

  return (
    <div className="cart">
      <h2>Your Wishlist ❤️</h2>

      {wishlist.length === 0 && <p>No items in wishlist</p>}

      {wishlist.map(item => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.name} />
          <div>
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Wishlist;
