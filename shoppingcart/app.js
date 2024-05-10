  const [items, setItems] = useState(itemsData.items);
  const [cart, setCart] = useState([]);

  const addToCart = (itemId) => {
    const selectedItem = items.find((item) => item.id === itemId);
    const itemInCart = cart.find((item) => item.id === itemId);

    if (itemInCart) {
      const updatedCart = cart.map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity: (item.quantity || 1) + 1 };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...selectedItem, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity > 5) {
      return; // Prevent updating quantity beyond 5
    }
    const updatedCart = cart.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce(
      (total, item) => total + item.price * (item.quantity || 1),
      0
    );
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <h2>Available Items</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => addToCart(item.id)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <h2>Cart Total</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} -
            <select
              value={item.quantity || 1}
              onChange={(e) =>
                updateQuantity(item.id, parseInt(e.target.value))
              }
            >
              {[...Array(5).keys()].map((number) => (
                <option key={number + 1} value={number + 1}>
                  {number + 1}
                </option>
              ))}
            </select>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h2>Total: ${calculateTotal()}</h2>
    </div>
  );
}
