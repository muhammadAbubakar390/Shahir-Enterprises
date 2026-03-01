import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Mission & Vision', path: '/mission' },
    { name: 'Strengths', path: '/strengths' },
    { name: 'Partners', path: '/partners' },
    { name: 'Clients', path: '/clients' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <motion.img
              src="/shahir-ent-logo.jif"
              alt="Shahir Enterprises Logo"
              className="w-10 h-10 mr-3 object-contain"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="flex items-center ml-2">
              <img
                src="/shahir-enterprises-new-logo.png"
                alt="Shahir Enterprises"
                className="h-6 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-all duration-300 hover:text-[#00bcd4] relative group ${location.pathname === link.path ? 'text-[#00bcd4]' : 'text-gray-700'
                  }`}
              >
                {link.name}
                <motion.span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[#00bcd4] ${location.pathname === link.path ? 'w-full' : 'w-0'
                    }`}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 text-gray-600 hover:text-[#00bcd4] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`block text-base font-medium py-2 border-b border-gray-50 ${location.pathname === link.path ? 'text-[#00bcd4]' : 'text-gray-700'
                      }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 space-y-2 text-sm text-gray-500">
                <div className="flex items-start">
                  <img src="/whatsapp-logo.svg" className="w-5 h-5 mr-2 mt-1" alt="WhatsApp" />
                  <div className="flex flex-col">
                    <span>+92 321 428 1313</span>
                    <span>+92 321 477 2772</span>
                    <span>+92 42 36 53 5626</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-[#00bcd4]" />
                  <span>info@shahirent.com</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}