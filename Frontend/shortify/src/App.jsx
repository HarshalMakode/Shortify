import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShortenURl from "./pages/ShortenUrl";
import URLCounter from "./pages/URLCounter";
import URLTracker from "./pages/URLTracker";
import ScrollToTop from "./components/ScrollToTop";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import ReportUrl from "./pages/ReportUrl";
import UnshortenUrl from "./pages/UnshortenUrl";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shortenurl" element={<ShortenURl/>} />
        <Route path="/urlcounter" element={<URLCounter/>} />
        <Route path="/urltracker" element={<URLTracker/>} />
        <Route path="/privacy" element={<Privacy/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/terms" element={<Terms/>} />
        <Route path="/report" element={<ReportUrl/>} />
        <Route path="/unshorten" element={<UnshortenUrl/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;