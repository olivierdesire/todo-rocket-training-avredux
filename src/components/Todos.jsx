import Todo from "./Todo";
import useTaskContext from "../contexts/TaskContext";

const Todos = () => {
  const { state } = useTaskContext();
  return (
    <div>
      {state.sortTasks ? (
        <div>
          <h2> Tâches faites </h2>
          {state.tasks.map((elem, index) => {
            if (elem.isDone)
              return <Todo task={elem} key={elem.name} index={index} />;
            else return null;
          })}
          <h2> Tâches non faites </h2>
          {state.tasks.map((elem, index) => {
            if (!elem.isDone)
              return <Todo task={elem} key={elem.name} index={index} />;
            else return null;
          })}
        </div>
      ) : (
        state.tasks.map((elem, index) => {
          return <Todo task={elem} key={elem.name} index={index} />;
        })
      )}
    </div>
  );
};

export default Todos;
