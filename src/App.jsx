import "./App.css";

import Header from "./components/Header";
import Todos from "./components/Todos";
import ToolBar from "./components/ToolBar";

function App() {
  return (
    <div>
      <Header />
      <Todos />
      <ToolBar />
    </div>
  );
}

export default App;
