import products from "../Data/Products";

function Products() {
  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = cart.find(p => p.id === product.id);

    if (item) {
      item.qty += 1;
    } else {
      cart.push({ ...product, qty: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart");
  };
  const addToWishlist = (product) => {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  if (!wishlist.find(item => item.id === product.id)) {
    wishlist.push(product);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    alert("Added to Wishlist ❤️");
  }
};


  return (
    <div className="products">
      {products.map(p => (
        <div className="product" key={p.id}>
          <img src={p.image} alt={p.name} />
          <h3>{p.name}</h3>
          <p>₹{p.price}</p>
          <button onClick={() => addToCart(p)}>Add to Cart</button>
          <button onClick={() => addToWishlist(p)}>❤️ Wishlist</button>
        </div>
      ))}
    </div>
  );
}

export default Products;
