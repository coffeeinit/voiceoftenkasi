import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import WhatWeDo from './pages/WhatWeDo';
import Events from './pages/Events';
import JoinUs from './pages/JoinUs';
import News from './pages/News';
import About from './pages/About';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import Team from './pages/Team';
import Impact from './pages/Impact';
import Gallery from './pages/Gallery';
import ImpactReports from './pages/ImpactReports';
import VolunteerStories from './pages/VolunteerStories';
import Partners from './pages/Partners';
import FAQ from './pages/FAQ';
import Feedback from './pages/Feedback';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/events" element={<Events />} />
            <Route path="/join-us" element={<JoinUs />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/team" element={<Team />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/impact-reports" element={<ImpactReports />} />
            <Route path="/volunteer-stories" element={<VolunteerStories />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;