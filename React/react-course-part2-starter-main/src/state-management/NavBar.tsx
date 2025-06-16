import AuthStatus from "./auth/AuthStatus";
import useTasks from "./tasks/useTasks";
const NavBar = () => {
  const { tasks } = useTasks();
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{tasks.length}</span>
      <AuthStatus />
    </nav>
  );
};

export default NavBar;
