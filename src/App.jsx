import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SearchProperty from './pages/SearchProperty';
import PropertyDetail from './pages/PropertyDetail';
import GatedDevelopment from './pages/GatedDevelopment';
import AboutBarbados from './pages/AboutBarbados';
import AboutUs from './pages/AboutUs';
import Podcasts from './pages/Podcasts';
import PodcastDetail from './pages/PodcastDetail';
import ForBuyers from './pages/ForBuyers';
import Contact from './pages/Contact';

function App() {
  return (
    <Router basename="/demo/kvs">
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search-result-sales" element={<SearchProperty />} />
            <Route path="/property-details-sales/:id" element={<PropertyDetail />} />
            <Route path="/gated-development" element={<GatedDevelopment />} />
            <Route path="/about-barbados" element={<AboutBarbados />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/podcasts" element={<Podcasts />} />
            <Route path="/podcast-list/:id" element={<PodcastDetail />} />
            <Route path="/for-buyers" element={<ForBuyers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
