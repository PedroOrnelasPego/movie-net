import { Outlet } from "react-router-dom";
import "./App.css";
import Menubar from "./components/Menubar";

function App() {
  return (
    <div className="App">
      <Menubar />
      <Outlet></Outlet>
    </div>
  );
}

export default App;
