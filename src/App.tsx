import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import NovoChatbot from './components/NovoChatbot';

// Page Components
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';
import Process from './pages/Process';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-slate-900 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Scroll to top utility on route changes */}
      <ScrollToTop />

      {/* Global Responsive Navbar */}
      <Navbar />

      {/* Main Multi-Page Route Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/process" element={<Process />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          
          {/* Privacy route & alias */}
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/privacy-policy" element={<Navigate to="/privacy" replace />} />
          
          {/* Terms route & alias */}
          <Route path="/terms" element={<Terms />} />
          <Route path="/terms-and-conditions" element={<Navigate to="/terms" replace />} />

          {/* Catch-all fallback route */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* Floating Interactive Chatbot */}
      <NovoChatbot />

      {/* Global Professional Footer */}
      <Footer />
    </div>
  );
}
