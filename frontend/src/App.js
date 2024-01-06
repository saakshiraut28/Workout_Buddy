/** @format */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Nav from "./components/navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
