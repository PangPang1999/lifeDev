import { useState } from "react";
import produce from "immer";
import Alert from "./components/Alert";
import Button1 from "./components/Button1";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import Heart from "./components/Heart";
import ExpandableText from "./components/ExpandableText";
function App() {
  // let items = ["London", "Tokyo", "New York"];
  // const handleSelectedIndex = (item: string) => {
  //   console.log(item);
  // };
  // const [alertVisible, setAlertVisible] = useState(false);
  // const onClose = () => {
  //   setAlertVisible(false);
  // };
  // const onBtnClick = () => {
  //   setAlertVisible(true);
  // };

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
    // setCart(produce(draft=>{
    //   const cart =  draft.find(c=>c.id===2);
    //   if(cart){
    //     cart.quantity++;
    //   }
    // }))
  };
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div>
      {/* {alertVisible && <Alert children="My alert" onClose={onClose}></Alert>}
      <Button1 onBtnClick={onBtnClick}></Button1>
      <ListGroup
        items={items}
        heading="cities"
        onSelectedIndex={handleSelectedIndex}
      />
      <Button children="My button" onClick={() => {}} color="primary"></Button> 
       <Heart onClick={() => console.log("clicked")} children=""></Heart>
      <button onClick={handleClick2}>
        {carts.items.map((item) => (
          <div key={item.id}>
            {item.title} - {item.quantity}
          </div>
        ))}
      </button>
      */}

      <ExpandableText maxChars={10} handleClick={handleClick}>
        Lorem ipsum dolor sit amet consectetur adipisicing eliquia, accusamus
        minima assumenda quisquam neque aliquaoptio harum magnam eius maxime.
        Magni veritatis culpadolorem. Rerum harum et minus aliquid placeat
        necessitaadipisci nemo ratione, ducimus dolorem omnis maiores!illum
        minus sed tenetur rem maiores quos incidunt soluVoluptate tempora itaque
        nostrum ea explicabo ullam esandithis componentwillhsummarize thertext
        for usoNowtby ul
      </ExpandableText>
    </div>
  );
}
export default App;
