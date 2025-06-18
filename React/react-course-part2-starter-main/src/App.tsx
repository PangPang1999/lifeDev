import "./App.css";
import { AuthProvider } from "./state-management/auth";
import Counter from "./state-management/counter/Counter";
import HomePage from "./state-management/HomePage";
import Navbar from "./state-management/NavBar";
import { TasksProvider } from "./state-management/tasks";

function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <Counter />
        <Navbar />
        <HomePage />
      </TasksProvider>
    </AuthProvider>
  );
}

export default App;
