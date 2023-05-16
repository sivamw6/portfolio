import Sidebar from './components/Sidebar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import { useRef } from 'react';
import { Routes, Route } from 'react-router-dom';


function App() {
    // Create references for each section
    const home = useRef(null);
    const about = useRef(null);
    const projects = useRef(null);
    const contact = useRef(null);
    
  const mainPage = 
  <>
    <div ref={home} ><Home /></div>
    <div ref={about} ><About /></div>
    <div ref={projects} ><Projects /></div>
    <div ref={contact} ><Contact /></div>
  </>
  
  return (
    <div className="App">
        <Sidebar
          home={home}
          about={about}
          projects={projects}
          contact={contact}
        />
        <Routes>
          <Route path="/" element={mainPage} />
          <Route path="/home" element={mainPage} />
          <Route path="/about" element={mainPage} />
          <Route path="/projects" element={mainPage} />
          <Route path="/contact" element={mainPage} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <ScrollToTop />
    </div>
  );
}

export default App;
