import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SelectMenu from "./pages/SelectMenu/SelectMenu";
import { GlobalStyle } from "./global";

function App() {
  return (
    <>
      <GlobalStyle/>
      <div className="App">
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/selectMenu" Component={SelectMenu} />
        </Routes>
      </div>
    </>
  );
}

export default App;
