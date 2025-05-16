import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import "./App.css";
import MainNavbar from "./pages/navbar/MainNavbar";
import Band from "./pages/band/Band";

function App() {
  return (
    <div className=" bg-[url(src/assets/canal.jpg)] bg-cover min-h-[100vh]">
      <BrowserRouter>
        <MainNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/le-groupe" element={<Band />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
