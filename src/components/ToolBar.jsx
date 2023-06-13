import { useState } from "react";
import useTaskContext from "../contexts/TaskContext";

const ToolBar = () => {
  console.log("Toolbar se render");
  const { state, dispatch } = useTaskContext();

  const [task, setTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_TASK", payload: { name: task, isDone: false } });
    setTask("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="task"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <button type="submit">Register task</button>
        <button>Undo last event</button>
        <button
          type="button"
          onClick={() => {
            dispatch({ type: "RESET" });
          }}
        >
          reset
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch({ type: "TOGGLE_SORT_TASKS" });
          }}
        >
          unsort my tasks/sort My tasks
        </button>
      </form>
    </div>
  );
};

export default ToolBar;
