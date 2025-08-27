import ListGroup from "./components/ListGroup/ListGroup";

const cities = ["New York", "San Francisco", "Tokyo", "London"];
const handleSelectItem = (item: string) => {
  console.log(item);
};

function App() {
  return (
    <>
      <ListGroup
        items={cities}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </>
  );
}

export default App;
