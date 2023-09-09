import "./App.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import Home from "./views/Home";
import Heroes from "./views/Heroes";
import Guides from "./views/Guides";
import NotFound from "./views/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <>
        <MyNavbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/heroes" element={<Heroes />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <MyFooter />
      </>
    </BrowserRouter>
  );
}

export default App;
