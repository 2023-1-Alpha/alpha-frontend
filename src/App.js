import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SelectMenu from "./pages/SelectMenu/SelectMenu";
import SelectDetail from "./pages/SelectDetail/SelectDetail";
import WebcamPreview from "./pages/WebcamPreview";

import { GlobalStyle } from "./global";

function App() {
  return (
    <>
      <GlobalStyle/>
      <div className="App">
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/selectMenu" Component={SelectMenu} />
          <Route exact path="/selectDetail" Component={SelectDetail} />
        </Routes>
      </div>
    </>
  );
}

export default App;
