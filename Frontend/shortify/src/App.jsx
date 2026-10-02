import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShortenURl from "./pages/ShortenUrl";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shortenurl" element={<ShortenURl/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;