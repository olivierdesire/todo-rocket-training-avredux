import { useState } from "react";
import useTaskContext from "../contexts/TaskContext";

const ToolBar = () => {
  console.log("Toolbar se render");
  const {
    tasks,
    numberOfDoneTasks,
    numberOfUndoneTasks,
    lastState,
    sortTasks,
    dispatch,
  } = useTaskContext();

  const [task, setTask] = useState("");

  const handleRegister = () => {
    dispatch({ type: "ADD_TASK", payload: task });
    console.log("tasks", tasks);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          id="task"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <button
          onClick={() => {
            handleRegister;
          }}
        >
          Register task
        </button>
        <button>Undo last event</button>
        <button>reset</button>
        <button>unsort my tasks/sort My tasks</button>
      </form>
    </div>
  );
};

export default ToolBar;
