import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import BootstrapNavbar from "./components/BootstrapNavbar";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <BootstrapNavbar />
        <AnimatedRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
