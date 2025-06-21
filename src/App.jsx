import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PartnersMap from "./pages/PartnersMap";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/partnerzy" element={<PartnersMap />} />
      </Routes>
    </Router>
  );
}

export default App;
