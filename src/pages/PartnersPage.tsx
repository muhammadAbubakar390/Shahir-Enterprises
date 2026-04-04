import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building2, Microscope, Beaker, Stethoscope } from 'lucide-react';
export function PartnersPage() {
  const navigate = useNavigate();
  const partners = [
    { name: 'Euromex Microscopes Holland', logo: '/brands/euromex-logo.png', website: 'https://www.euromex.com' },
    { name: 'AD Instruments', logo: '/brands/adinstruments-logo.png', website: 'https://www.adinstruments.com' },
    { name: 'Infitek', logo: '/brands/infitek-logo.png', website: 'https://www.infitek.com' },
    { name: '3e Aelabgroup', logo: '/brands/aelabgroup-logo.png', website: 'http://www.aelabgroup.com' },
    { name: 'Biobase', logo: '/brands/biobase-logo.jpg', website: 'https://www.biobase.cc' },
    { name: 'Edvotek', logo: '/brands/edvotek-logo.avif', website: 'https://www.edvotek.com' },
    { name: 'Suslaser', logo: '/brands/suslaser-logo.png', website: 'http://www.suslaser.com' },
    { name: 'Tamheed Energy', logo: '/brands/tamheed-energy.png', website: 'https://tamheedenergy.com' },
    { name: 'Yidi', logo: '/brands/yidi-logo.png', website: 'https://www.zjyidi.com/' },
    { name: 'Merck', logo: '/brands/merck-logo.png', website: 'https://www.merckgroup.com' },
    { name: 'Four E\'s Scientific', logo: '/brands/foure-logo.png', website: 'https://www.4esci.com/' },
    { name: 'Prestan', logo: '/brands/prestan-logo.png', website: 'https://www.prestanproducts.com' },
    { name: 'LLG', logo: '/llg_logo.jif', website: 'https://www.llg.de/en/' },
    { name: 'LGC Clinical Diagnostics', logo: '/lgc_logo.webp', website: 'https://www.lgcclinicaldiagnostics.com/about/lgc-clinical-diagnostics' }];

  const representations = [
    {
      icon: <Microscope className="w-12 h-12" />,
      title: 'Life Sciences Research',
      desc: 'Advanced equipment for molecular biology, genetics, and life science research applications.',
      image: 'life-science.jpg'
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: 'Analytical & Industrial Solutions',
      desc: 'Precision instruments for quality control, industrial analysis, and manufacturing processes.',
      image: 'life-science-and-analytical-instruments.jpeg'
    },
    {
      icon: <Stethoscope className="w-12 h-12" />,
      title: 'Physiology & Anatomy Models',
      desc: 'Detailed educational models for medical training, anatomy studies, and forensic applications.',
      image: 'anatomy-model.jpg'
    },
    {
      icon: <Beaker className="w-12 h-12" />,
      title: 'Laboratory & Medical Research Equipment',
      desc: 'State-of-the-art tools for clinical laboratories, medical research, and diagnostic applications.',
      image: 'model-research.jpg'
    }];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00bcd4]/5 transform rotate-45 translate-x-32 -translate-y-32"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-4">
            Global Partners & Brands
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            We proudly represent some of the world's most respected developers
            and manufacturers in scientific and analytical solutions.
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">
              Trusted Global Brands
            </h2>
            <p className="text-gray-600">
              Bringing world-class technology to Pakistan
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) =>
              <a
                key={index}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
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
                  transition={{
                    delay: index * 0.05
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -5
                  }}
                  className="bg-white p-6 rounded-xl border-2 border-gray-100 flex items-center justify-center hover:border-[#00bcd4] hover:shadow-lg transition-all duration-300 cursor-pointer group min-h-[120px]">

                  <div className="w-full h-full flex items-center justify-center p-2">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-16 w-auto object-contain transition-all duration-300"
                    />
                  </div>
                </motion.div>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Representation Categories */}
      <section className="py-20 bg-white shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
              Our Representation
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive solutions across multiple domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {representations.map((item, index) =>
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 30
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: index * 0.1
                }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
                }}
                className="group bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 cursor-pointer transition-all duration-500">

                {/* Image Header */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/80 via-transparent to-transparent"></div>

                  {/* Floating Icon */}
                  <motion.div
                    className="absolute -bottom-1 left-8 w-16 h-16 bg-[#00bcd4] rounded-2xl flex items-center justify-center text-white shadow-xl z-10"
                    whileHover={{
                      rotate: 360,
                      scale: 1.1
                    }}
                    transition={{
                      duration: 0.6
                    }}>
                    {item.icon}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-8 pt-12 text-left">
                  <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4 group-hover:text-[#00bcd4] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#1e3a5f] to-[#162c46] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Partner With Excellence</h2>
          <p className="text-xl text-gray-300 mb-8">
            Interested in learning more about our global partnerships and how we
            can serve your institution?
          </p>
          <motion.button
            onClick={() => navigate('/contact')}
            className="px-8 py-3 bg-[#00bcd4] text-white font-semibold rounded-lg hover:bg-[#00a5bd] transition-colors"
            whileHover={{
              scale: 1.05
            }}
            whileTap={{
              scale: 0.95
            }}>

            Contact Our Team
          </motion.button>
        </div>
      </section>
    </div>);

}