import "./styles/contactModal.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import Loader from "./components/Loader";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import AIHealth from "./pages/AIHealth";
import MentalHealth from "./pages/MentalHealth";
import StudentPerformance from "./pages/StudentPerformance";
import PortfolioProject from "./pages/PortfolioProject";

import "./styles/about.css";
import "./styles/skills.css";
import "./styles/projects.css";
import "./styles/education.css";
import "./styles/contact.css";
import "./styles/footer.css";
import "./styles/projectDetails.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Routes>

      {/* Home Page */}
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Contact />
            <Footer />
          </>
        }
      />

      {/* Project Detail Pages */}
      <Route path="/project/ai-health" element={<AIHealth />} />
      <Route path="/project/mental-health" element={<MentalHealth />} />
      <Route
        path="/project/student-performance"
        element={<StudentPerformance />}
      />
      <Route
        path="/project/portfolio"
        element={<PortfolioProject />}
      />

    </Routes>
  );
}

export default App;