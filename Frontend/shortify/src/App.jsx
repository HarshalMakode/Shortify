import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShortenURl from "./pages/ShortenUrl";
import URLCounter from "./pages/URLCounter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shortenurl" element={<ShortenURl/>} />
        <Route path="/urlcounter" element={<URLCounter/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;