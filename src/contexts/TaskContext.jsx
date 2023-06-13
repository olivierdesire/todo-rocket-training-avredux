import { createContext, useContext, useReducer } from "react";

const initialState = {
  tasks: [],
  numberOfDoneTasks: 0,
  numberOfUndoneTasks: 0,
  lastState: null,
  sortTasks: false,
};

const taskReducer = (state, action) => {
  const { type, payload } = action;
  console.log("payload>>", payload);
  switch (type) {
    case "ADD_TASK":
      return {
        tasks: { name: payload, isDone: false },
        numberOfUndoneTasks: state.numberOfUndoneTasks++,
      };
    default:
      return state;
  }
};

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  console.log("TaskProvider se render");
  const [state, dispatch] = useReducer(taskReducer, initialState);

  const value = {
    tasks: state.tasks,
    numberOfDoneTasks: state.numberOfDoneTasks,
    numberOfUndoneTasks: state.numberOfUndoneTasks,
    lastState: state.lastState,
    sortTasks: state.sortTasks,
    dispatch: dispatch,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

const useTaskContext = () => {
  const context = useContext(TaskContext);
  return context;
};

export default useTaskContext;
