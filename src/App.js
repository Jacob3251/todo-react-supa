import "./App.css";

import HomePage from "./components/HomePage/HomePage";
import { Routes, Route, Link } from "react-router-dom";
import TaskInfo from "./components/TaskInfo/TaskInfo";
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";
function App() {
  return (
    <div className="App">
      <Header className="shadow-transparent"></Header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="tasks" element={<TaskInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
