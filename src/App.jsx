import "./App.css";

import { TaskProvider } from "./contexts/TaskContext";

import Header from "./components/Header";
import Todos from "./components/Todos";
import ToolBar from "./components/ToolBar";

function App() {
  return (
    <TaskProvider>
      <Header />
      <Todos />
      <ToolBar />
    </TaskProvider>
  );
}

export default App;
