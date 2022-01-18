import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Days from "./components/Days";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import Navbar from "./containers/Navbar";
import NotFound from "./containers/NotFound";
import FAQ from "./components/FAQ";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:slug" element={<Days />} />
        <Route exact path="/faq" element={<FAQ />} />
        <Route
          path="*"
          element={<NotFound msg="OOPs, You just hit a wrong route..." />}
        />
      </Routes>
    </Router>
  );
}

export default App;
