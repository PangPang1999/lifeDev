import { useState } from "react";

function App() {
  const [cart, setCart] = useState({
    discount: 10,
    items: [
      { id: 1, title: "Apple", quantity: 2 },
      { id: 2, title: "Banana", quantity: 3 },
    ],
  });

  const updateQuantity = (id: number, newQuantity: number) => {
    setCart((prevCart) => ({
      ...prevCart,
      items: prevCart.items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      ),
    }));
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.items.map((item) => (
        <div key={item.id}>
          <p>
            {item.title}: {item.quantity}
          </p>
          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
            Increase Quantity
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
