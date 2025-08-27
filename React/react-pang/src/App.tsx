import Like from "./components/Like";

function App() {
  return (
    <Like
      onClick={() => {
        console.log("clicked");
      }}
    />
  );
}

export default App;
