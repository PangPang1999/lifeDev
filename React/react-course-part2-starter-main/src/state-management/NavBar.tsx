import AuthStatus from "./auth/AuthStatus";
import useCounterStore from "./counter/store";
import useTasks from "./tasks/useTasks";
const NavBar = () => {
  const { tasks } = useTasks();
  const { counter } = useCounterStore();
  return (
    <nav className="navbar d-flex justify-content-between">
      count: {counter}
      <span className="badge text-bg-secondary">{tasks.length}</span>
      <AuthStatus />
    </nav>
  );
};

export default NavBar;
