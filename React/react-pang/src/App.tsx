import { useState } from "react";

function App() {
  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "New York",
      zipCode: "10001",
    },
  });

  const handleUpdateZipCode = () => {
    setCustomer({
      ...customer,
      address: {
        ...customer.address,
        zipCode: "10002",
      },
    });
  };

  return (
    <div>
      <p>{customer.name}</p>
      <p>
        {customer.address.city}, {customer.address.zipCode}
      </p>
      <button onClick={handleUpdateZipCode}>Update Zip Code</button>
    </div>
  );
}

export default App;
