import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from
  'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { MissionVisionPage } from './pages/MissionVisionPage';
import { StrengthsPage } from './pages/StrengthsPage';
import { PartnersPage } from './pages/PartnersPage';
import { ClientsPage } from './pages/ClientsPage';
import { ContactPage } from './pages/ContactPage';
import { CertificatePage } from './pages/CertificatePage';
import { WhatsAppButton } from './components/WhatsAppButton';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);
  return null;
}
// Page transition wrapper
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{
          opacity: 0,
          y: 20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        exit={{
          opacity: 0,
          y: -20
        }}
        transition={{
          duration: 0.3
        }}>

        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/mission" element={<MissionVisionPage />} />
          <Route path="/strengths" element={<StrengthsPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/certificate" element={<CertificatePage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>);

}
export function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
        <Header />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>);

}