import ListGroup from "./components/ListGroup";

const cities = ["New York", "San Francisco", "Tokyo", "London"];
const names = ["Alice", "Bob", "Carol"];
const colors = ["Red", "Green", "Blue"];

function App() {
  return (
    <>
      <ListGroup items={cities} heading="Cities" />
      <ListGroup items={names} heading="Names" />
      <ListGroup items={colors} heading="Colors" />
      {/* 若漏传必填 props，TS 会报错，防止运行期问题 */}
    </>
  );
}

export default App;
