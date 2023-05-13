import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SelectMenu from "./pages/SelectMenu/SelectMenu";
import SelectDetail from "./pages/SelectDetail/SelectDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/selectMenu" Component={SelectMenu} />
        <Route exact path="/selectDetail" Component={SelectDetail} />
      </Routes>
    </div>
  );
}

export default App;
