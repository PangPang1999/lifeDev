import { useState } from "react";
import ExpandableText from "./components/ExpandableText";

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
      <ExpandableText>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        delectus in sit inventore, eaque eos suscipit exercitationem qui
        expedita architecto magnam ratione asperiores unde enim! Accusantium
        consequatur ab obcaecati asperiores. Nemo, fuga! Sequi, quasi blanditiis
        repellat natus dolorum eveniet ratione necessitatibus doloremque vel
        labore debitis et iste consequatur neque provident facilis distinctio
        culpa quibusdam odio ad voluptas pariatur architecto? Unde ea hic
        corporis expedita eius, quia vero quo dignissimos voluptatibus, corrupti
        natus qui voluptas similique magni provident debitis quaerat nulla,
        maiores repellat iure inventore. Ut, fugit? Vero repellat dolore
        accusantium quae odit magni illum numquam, natus non soluta, illo
        voluptatem!
      </ExpandableText>
    </div>
  );
}

export default App;
