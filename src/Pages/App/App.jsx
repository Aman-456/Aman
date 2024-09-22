import React from "react";
import "../../Styles/App.css";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer";
import E404 from "../../components/404/E404";
import ScrollToTop from "../../components/ScrollToTop";
import Portfolio from "../Portfolio";
import ProjectPage from "../ProjectPage";
import About from "../About";
import Contact from "../Contact";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
function App() {
  const app = React.useRef(null);
  React.useEffect(() => {
    window.addEventListener("load", () => app.current.classList.add("show"));
    return () => window.removeEventListener("load");
  });

  return (
    <div className="App" ref={app}>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="*" element={<E404 />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
