import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShortenURl from "./pages/ShortenUrl";
import URLCounter from "./pages/URLCounter";
import URLTracker from "./pages/URLTracker";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shortenurl" element={<ShortenURl/>} />
        <Route path="/urlcounter" element={<URLCounter/>}/>
        <Route path="/urltracker" element={<URLTracker/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;