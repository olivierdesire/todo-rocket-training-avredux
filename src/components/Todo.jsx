const Todo = ({ task, index }) => {
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
