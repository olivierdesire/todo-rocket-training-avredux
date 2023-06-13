import useTaskContext from "../contexts/TaskContext";

const Todo = ({ task, index }) => {
  const { dispatch } = useTaskContext();
  return (
    <div>
      <p>{task.name}</p>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => {
          dispatch({ type: "TOGGLE_TASK", payload: { ...task, index } });
        }}
      />
      <button
        onClick={() => {
          dispatch({ type: "REMOVE_TASK", payload: task });
        }}
      >
        Delete Task
      </button>
    </div>
  );
};

export default Todo;
