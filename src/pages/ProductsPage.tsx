import { motion } from 'framer-motion';
import {
  Monitor,
  Droplet,
  FlaskConical,
  Microscope,
  Activity,
  Package,
  ArrowRight
} from
  'lucide-react';
import { Link } from 'react-router-dom';
export function ProductsPage() {
  const products = [
    {
      icon: <Monitor className="w-10 h-10" />,
      title: 'Data Acquisition Systems (PowerLab)',
      description:
        'Advanced systems for physiological and biomedical data recording, analysis, and research applications.',
      features: [
        'Real-time data recording',
        'Multi-channel acquisition',
        'Advanced analysis software',
        'Research-grade accuracy'],

      image:
        'Data Acquisition Systems (PowerLab).webp'
    },
    {
      icon: <Droplet className="w-10 h-10" />,
      title: 'Blood Bank & Allied Equipment',
      description:
        'Complete range of instruments for safe blood collection, storage, and processing — ensuring precision and compliance with healthcare standards.',
      features: [
        'Blood storage refrigerators',
        'Plasma freezers',
        'Blood bank centrifuges',
        'Temperature monitoring systems'],

      image:
        'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80'
    },
    {
      icon: <FlaskConical className="w-10 h-10" />,
      title: 'Analytical & Scientific Instruments',
      description:
        'High-performance tools for chemical analysis, quality control, and laboratory testing across multiple industries.',
      features: [
        'Spectrophotometers',
        'Chromatography systems',
        'pH meters & electrodes',
        'Analytical balances'],

      image:
        'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80'
    },
    {
      icon: <Microscope className="w-10 h-10" />,
      title: 'Medical Laboratory & Research Equipment',
      description:
        'Reliable instruments that support diagnostics, medical research, and healthcare innovation.',
      features: [
        'Clinical analyzers',
        'Hematology systems',
        'Biochemistry analyzers',
        'Diagnostic microscopes'],

      image:
        'Medical Laboratory & Research Equipment.png'
    },
    {
      icon: <Activity className="w-10 h-10" />,
      title: 'Physiology Laboratory Equipment',
      description:
        'Comprehensive teaching and research solutions for studying human and animal physiology.',
      features: [
        'Physiological recorders',
        'Spirometry systems',
        'ECG & EMG equipment',
        'Teaching simulation models'],

      image:
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80'
    },
    {
      icon: <Package className="w-10 h-10" />,
      title: 'General Laboratory & Research Consumables',
      description:
        'Essential lab supplies, reagents, and accessories for daily experimental and analytical work.',
      features: [
        'CRM',
        'Reference Standards',
        'Glassware & Plasticware',
        'Reagents & Chemicals',
        'Pipettes & Tips',
        'Lab Safety Equipment'],

      image:
        'General Laboratory & Research Consumables.jpg'
    }];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#162c46] text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00bcd4]/10 transform rotate-45 translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00bcd4]/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6
            }}
            className="text-center">

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Product Portfolio
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions for laboratories, research institutions,
              and healthcare facilities across Pakistan. From advanced data
              acquisition systems to essential lab consumables — we provide
              everything you need for scientific excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {products.map((product, index) =>
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
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500">

                {/* Product Image */}
                <div className="relative h-64 overflow-hidden bg-gray-200">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/80 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

                  {/* Icon Badge */}
                  <motion.div
                    className="absolute top-6 left-6 w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center text-[#1e3a5f]"
                    whileHover={{
                      rotate: 360,
                      scale: 1.1
                    }}
                    transition={{
                      duration: 0.6
                    }}>

                    {product.icon}
                  </motion.div>
                </div>

                {/* Product Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4 group-hover:text-[#00bcd4] transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    {product.features.map((feature, i) =>
                      <motion.div
                        key={i}
                        className="flex items-center text-sm text-gray-700"
                        initial={{
                          opacity: 0,
                          x: -10
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0
                        }}
                        viewport={{
                          once: true
                        }}
                        transition={{
                          delay: index * 0.1 + i * 0.05
                        }}>

                        <div className="w-1.5 h-1.5 bg-[#00bcd4] rounded-full mr-3"></div>
                        <span>{feature}</span>
                      </motion.div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <Link to="/contact">
                    <motion.button
                      className="text-[#1e3a5f] font-semibold inline-flex items-center hover:text-[#00bcd4] transition-colors"
                      whileHover={{
                        x: 5
                      }}>

                      Request Information{' '}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
            }}>

            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">
              Need Help Choosing the Right Equipment?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our expert team is ready to help you find the perfect solution for
              your laboratory or research facility.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  className="px-8 py-3 bg-[#1e3a5f] text-white font-semibold rounded-lg hover:bg-[#162c46] transition-colors"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 10px 25px rgba(30, 58, 95, 0.3)'
                  }}
                  whileTap={{
                    scale: 0.95
                  }}>

                  Contact Our Team
                </motion.button>
              </Link>
              <Link to="/about">
                <motion.button
                  className="px-8 py-3 bg-white text-[#1e3a5f] border-2 border-[#1e3a5f] font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                  whileHover={{
                    scale: 1.05
                  }}
                  whileTap={{
                    scale: 0.95
                  }}>

                  Learn More About Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-16 bg-gradient-to-r from-[#1e3a5f] to-[#162c46] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: 'Installation & Training',
                desc: 'Complete setup with comprehensive user training'
              },
              {
                title: 'Maintenance & Support',
                desc: '24/7 technical support and preventive maintenance'
              },
              {
                title: 'Genuine Products',
                desc: 'Authorized distributor of world-class brands'
              }].
              map((item, index) =>
                <motion.div
                  key={index}
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
                    delay: index * 0.1
                  }}
                  className="p-6">

                  <h3 className="text-xl font-bold mb-3 text-[#00bcd4]">
                    {item.title}
                  </h3>
                  <p className="text-gray-300">{item.desc}</p>
                </motion.div>
              )}
          </div>
        </div>
      </section>
      {/* Final CTA Buttons */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-6 justify-center"
          >
            <Link to="/contact">
              <motion.button
                className="px-12 py-4 bg-[#1e3a5f] text-white font-semibold rounded hover:bg-[#162c46] transition-colors flex items-center shadow-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 10px 25px rgba(30, 58, 95, 0.3)'
                }}
                whileTap={{
                  scale: 0.95
                }}>

                Get a Quote <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </Link>
            <Link to="/about">
              <motion.button
                className="px-12 py-4 bg-white text-[#1e3a5f] border border-[#1e3a5f] font-semibold rounded hover:bg-gray-50 transition-colors"
                whileHover={{
                  scale: 1.05
                }}
                whileTap={{
                  scale: 0.95
                }}>

                Learn More
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>);

}