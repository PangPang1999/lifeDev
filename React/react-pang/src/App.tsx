import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  // ❌ 错误：原地修改 + 引用不变
  const bad = () => {
    drink.price = drink.price + 1;
    setDrink(drink);
    console.log(drink);
  };

  // ✅ 正确：创建新对象（引用变了）
  const good = () => {
    setDrink((d) => ({ ...d, price: d.price + 1 }));
    console.log(drink);
  };

  return (
    <div>
      <div>
        {drink.title} : ${drink.price}
      </div>
      <Button onClick={bad}>BAD UPDATE</Button>
      <Button onClick={good}>GOOD UPDATE</Button>
    </div>
  );
}

export default App;
