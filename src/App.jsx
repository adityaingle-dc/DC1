import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import ScopeBuilder from "./pages/ScopeBuilder";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/scope-builder" element={<ScopeBuilder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;