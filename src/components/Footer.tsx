import { Link } from 'react-router-dom';
import { Mail, MapPin, Globe, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
export function Footer() {
  return (
    <footer className="bg-[#1e3a5f] text-white pt-16 pb-8 relative overflow-hidden">
      {/* Decorative Diagonal */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#00bcd4]/10 transform rotate-45 translate-x-32 -translate-y-32"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Office Locations Banner */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/10">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-[#00bcd4] mb-2">
                Head Office
              </h3>
              <p className="text-gray-300">
                569, G2 Phase 1, Wapda Town, Lahore
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#00bcd4] mb-2">
                Branch Offices
              </h3>
              <p className="text-gray-300">Islamabad | Faisalabad</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-flex items-center bg-white p-3 rounded-xl mb-6 shadow-sm hover:shadow-md transition-shadow">
              <img
                src="/shahir-ent-footer-logo.png"
                alt="Shahir Enterprises Logo"
                className="w-12 h-12 mr-3 object-contain"
              />
              <div className="flex items-center">
                <img
                  src="/shahir-ent-footer-logo1.png"
                  alt="Shahir Enterprises"
                  className="h-12 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Your trusted partner in scientific, analytical & medical
              solutions. Providing innovative equipment and support across
              Pakistan.
            </p>
            <motion.div
              className="inline-block bg-white/10 px-4 py-2 rounded border border-white/20"
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(255,255,255,0.15)'
              }}>

              <span className="font-bold text-[#00bcd4]">ISO 9001:2015</span>{' '}
              <span className="text-xs text-gray-300 ml-1">CERTIFIED</span>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b-2 border-[#00bcd4] inline-block pb-1">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                {
                  name: 'Home',
                  path: '/'
                },
                {
                  name: 'About Us',
                  path: '/about'
                },
                {
                  name: 'Products',
                  path: '/products'
                },
                {
                  name: 'Mission & Vision',
                  path: '/mission'
                },
                {
                  name: 'Our Strengths',
                  path: '/strengths'
                },
                {
                  name: 'Partners',
                  path: '/partners'
                },
                {
                  name: 'Clients',
                  path: '/clients'
                },
                {
                  name: 'Contact Us',
                  path: '/contact'
                }].
                map((link) =>
                  <motion.li
                    key={link.name}
                    whileHover={{
                      x: 5
                    }}
                    transition={{
                      duration: 0.2
                    }}>

                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-[#00bcd4] transition-colors flex items-center text-sm group">

                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{link.name}</span>
                    </Link>
                  </motion.li>
                )}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b-2 border-[#00bcd4] inline-block pb-1">
              Solutions
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              {[
                'Data Acquisition Systems',
                'Blood Bank Equipment',
                'Analytical Instruments',
                'Medical Lab Equipment',
                'Physiology Equipment',
                'Lab Consumables'].
                map((item, index) =>
                  <motion.li
                    key={index}
                    className="hover:text-white transition-colors cursor-pointer"
                    whileHover={{
                      x: 5
                    }}>

                    {item}
                  </motion.li>
                )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b-2 border-[#00bcd4] inline-block pb-1">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <motion.li
                className="flex items-start group cursor-pointer"
                whileHover={{
                  x: 5
                }}>

                <a
                  href="https://maps.app.goo.gl/S5PYP8Bi4Bm2vUs5A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start"
                >
                  <MapPin className="w-5 h-5 mr-3 text-[#00bcd4] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="group-hover:text-white transition-colors">
                    Lahore, Pakistan
                  </span>
                </a>
              </motion.li>
              <motion.li
                className="flex items-center group cursor-pointer"
                whileHover={{
                  x: 5
                }}>

                <img src="/whatsapp-logo.svg" className="w-6 h-6 mr-3 flex-shrink-0 group-hover:rotate-12 transition-transform" alt="WhatsApp" />
                <div className="flex flex-col group-hover:text-white transition-colors">
                  <span>+92 321 428 1313</span>
                  <span>+92 321 477 2772</span>
                  <span>+92 42 36 53 5626</span>
                </div>
              </motion.li>
              <motion.li
                className="flex items-center group"
                whileHover={{
                  x: 5
                }}>

                <Mail className="w-5 h-5 mr-3 text-[#00bcd4] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a
                  href="mailto:info@shahirent.com"
                  className="hover:text-white transition-colors">

                  info@shahirent.com
                </a>
              </motion.li>
              <motion.li
                className="flex items-center group"
                whileHover={{
                  x: 5
                }}>

                <Globe className="w-5 h-5 mr-3 text-[#00bcd4] flex-shrink-0 group-hover:rotate-180 transition-transform duration-500" />
                <a
                  href="https://www.shahirent.com"
                  className="hover:text-white transition-colors">

                  www.shahirent.com
                </a>
              </motion.li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Shahir Enterprises. All rights
            reserved.
          </p>
          <p className="mt-2 md:mt-0">
            Trusted Partner in Scientific Excellence
          </p>
        </div>
      </div>
    </footer>);

}