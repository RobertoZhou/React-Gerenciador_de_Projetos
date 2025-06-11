import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home.js';
import Contact from './components/pages/Contact.js';
import Company from './components/pages/Company.js';
import NewProject from './components/pages/NewProject.js';
import Projects from './components/pages/Projects.js';

import Container from './components/layout/Container.js';
import Navbar from './components/layout/Navbar.js';
import Footer from './components/layout/Footer.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Container customClass='min-height'><Home /></Container>} />
        <Route path='/projects' element={<Container customClass='min-height'><Projects /></Container>} />
        <Route path='/company' element={<Container customClass='min-height'><Company /></Container>} />
        <Route path='/contact' element={<Container customClass='min-height'><Contact /></Container>} />
        <Route path='/newproject' element={<Container customClass='min-height'><NewProject /></Container>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;