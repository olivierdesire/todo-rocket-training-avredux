import { createContext, useContext, useReducer } from "react";

const initialState = {
  tasks: [],
  numberOfDoneTasks: 0,
  numberOfUndoneTasks: 0,
  lastState: null,
  sortTasks: false,
};

const taskReducer = (state, action) => {
  const stateCopy = structuredClone(state);
  const { type, payload } = action;
  const { tasks } = stateCopy;
  switch (type) {
    case "ADD_TASK":
      stateCopy.tasks = [...tasks, payload];
      stateCopy.numberOfUndoneTasks++;
      return stateCopy;

    case "REMOVE_TASK":
      stateCopy.tasks = tasks.filter((elem) => elem.name !== payload.name);
      if (payload.isDone) stateCopy.numberOfDoneTasks--;
      else stateCopy.numberOfUnDoneTasks--;
      return stateCopy;

    case "TOGGLE_TASK":
      stateCopy.tasks[payload.index].isDone =
        !stateCopy.tasks[payload.index].isDone;
      // Attention ici payload.isDone est ce qui est avant changement. donc il faut faire l'inverse.
      if (payload.isDone) {
        stateCopy.numberOfDoneTasks--;
        stateCopy.numberOfUndoneTasks++;
      } else {
        stateCopy.numberOfDoneTasks++;
        stateCopy.numberOfUndoneTasks--;
      }
      return stateCopy;

    case "RESET":
      return {
        tasks: [],
        numberOfDoneTasks: 0,
        numberOfUndoneTasks: 0,
        lastState: null,
        sortTasks: false,
      };
    case "TOGGLE_SORT_TASKS":
      stateCopy.sortTasks = !state.sortTasks;
      return stateCopy;
    default:
      return state;
  }
};

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  console.log("TaskProvider se render");
  const [state, dispatch] = useReducer(taskReducer, initialState);

  const value = {
    state,
    dispatch,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

const useTaskContext = () => {
  const context = useContext(TaskContext);
  return context;
};

export default useTaskContext;
