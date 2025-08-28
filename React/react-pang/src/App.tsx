import { useState } from "react";

function App() {
  // const [firstName, setFirstName] = useState("John");
  // const [lastName, setLastName] = useState("Doe");
  const [person, setPerson] = useState({ firstName: "John", lastName: "Doe" });
  const [isLoading, setIsLoading] = useState(false);
  const fullName = person.firstName + " " + person.lastName;

  return (
    <div>
      {fullName}
      {isLoading && <p>Loading...</p>}
    </div>
  );
}

export default App;
