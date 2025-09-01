import { useEffect, useRef, useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [category, setCategory] = useState("");

  return (
    <div>
      <select
        className="form-select"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Select</option>
        <option value="clothing">Clothing</option>
        <option value="household">Household</option>
      </select>

      <ProductList category={category} />
    </div>
  );
}

export default App;
