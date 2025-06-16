import "./App.css";
import { AuthProvider } from "./state-management/auth";
import HomePage from "./state-management/HomePage";
import Navbar from "./state-management/NavBar";
import { TasksProvider } from "./state-management/tasks";

function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <Navbar />
        <HomePage />
      </TasksProvider>
    </AuthProvider>
  );
}

export default App;
