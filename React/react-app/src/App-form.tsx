import { useState } from "react";

import Form from "./components/Form";
function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });
  const handleClick1 = () => {
    setGame({
      ...game,
      player: {
        ...game.player,
        name: "Doe",
      },
    });
  };
  const [carts, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });
  const handleClick2 = () => {
    setCart({
      ...carts,
      items: carts.items.map((item) =>
        item.id === 2 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div>
      <Form
        formData1={[
          { id: 1, value: "Groceries", label: "Groceries" },
          { id: 2, value: "Utilities", label: "Utilities" },
          { id: 3, value: "Entertainment", label: "Entertainment" },
        ]}
        formData2={[
          { id: 1, value: "Groceries", label: "Groceries" },
          { id: 2, value: "Utilities", label: "Utilities" },
          { id: 3, value: "Entertainment", label: "Entertainment" },
        ]}
      />
    </div>
  );
}
export default App;
