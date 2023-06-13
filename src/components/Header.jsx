import useTaskContext from "../contexts/TaskContext";
const Header = () => {
  const { state } = useTaskContext();
  return (
    <div>
      <h1>My Todo List</h1>
      <p>Nombre de tâche totales : {state.tasks.length}</p>
      <p>Nombre de tâches faites: {state.numberOfDoneTasks} </p>
      <p>Nombre de tâches restantes {state.numberOfUndoneTasks}</p>
    </div>
  );
};

export default Header;
