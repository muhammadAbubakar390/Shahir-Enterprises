import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  Activity,
  FlaskConical,
  Microscope,
  Brain,
  Award
} from
  'lucide-react';
import { Link } from 'react-router-dom';
export function HomePage() {
  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  const staggerContainer = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div className="pt-20">
        <section className="relative min-h-[80vh] flex items-start pt-28 lg:pt-40 overflow-hidden">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src="/shahir-ent-video.mp4" type="video/mp4" />
          </video>

          {/* Overlays */}
          <div className="absolute inset-0 bg-white/45 backdrop-blur-[3px] z-[1]"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1e3a5f]/5 skew-x-12 transform origin-top-right z-[2]"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00bcd4]/10 rounded-full blur-3xl z-[2]"></div>


          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="flex flex-col">
              {/* Text Content */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="space-y-6 max-w-4xl"
              >
                <motion.div
                  variants={fadeInUp}
                  className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100"
                >
                  <Award className="w-4 h-4 text-[#00bcd4]" />
                  <span className="text-sm font-medium text-gray-600">
                    ISO 9001:2015 Certified
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="text-2xl lg:text-4xl xl:text-5xl font-bold text-[#1e3a5f] leading-tight"
                >
                  Your Trusted Partner in{' '}
                  <span className="text-[#00bcd4]">Scientific</span>,{' '}
                  <span className="text-[#00bcd4]">Analytical</span> &{' '}
                  <span className="text-[#00bcd4]">Medical</span> Solutions
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-xl text-gray-600 max-w-3xl leading-relaxed"
                >
                  Providing advanced laboratory equipment, analytical instruments,
                  and comprehensive support for research, healthcare, and industry
                  across Pakistan.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      {/* ISO Card Section - Right below Hero */}
      <section className="py-12 bg-white relative z-20 -mt-10 lg:-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            {/* Main Blue Card */}
            <Link to="/certificate" className="block group/card">
              <motion.div
                className="w-full bg-gradient-to-br from-[#1e3a5f] to-[#162c46] p-8 lg:p-12 rounded-2xl shadow-2xl border-4 border-white relative overflow-hidden transition-all duration-300 group-hover/card:ring-4 group-hover/card:ring-[#00bcd4]/30"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#00bcd4]/10 rounded-full blur-3xl"></div>
                <div className="relative z-10 text-white flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
                  <div className="space-y-6 flex-1">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-[#00bcd4] rounded-lg flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl uppercase tracking-wider text-white">ISO 9001</h3>
                        <p className="text-xs text-[#00bcd4] font-bold">CERTIFIED ORGANIZATION</p>
                      </div>
                    </div>

                    <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                      Medical, Analytical Laboratory Equipment & Solutions
                    </h2>

                    <div className="inline-flex items-center text-[#00bcd4] text-sm font-bold uppercase tracking-widest mt-4 opacity-0 group-hover/card:opacity-100 transition-opacity">
                      <span>View Certificate</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>

                  <div className="space-y-4 min-w-[280px] w-full lg:w-auto pt-8 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-12">
                    <div className="flex items-center space-x-3 group/item">
                      <CheckCircle className="w-6 h-6 text-[#00bcd4] group-hover/item:scale-110 transition-transform" />
                      <span className="text-lg font-medium">World-Class Equipment</span>
                    </div>
                    <div className="flex items-center space-x-3 group/item">
                      <CheckCircle className="w-6 h-6 text-[#00bcd4] group-hover/item:scale-110 transition-transform" />
                      <span className="text-lg font-medium">Expert Technical Support</span>
                    </div>
                    <div className="flex items-center space-x-3 group/item">
                      <CheckCircle className="w-6 h-6 text-[#00bcd4] group-hover/item:scale-110 transition-transform" />
                      <span className="text-lg font-medium">Nationwide Service</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services/Categories Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#00bcd4] font-semibold tracking-wider uppercase text-sm">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mt-2">
              Comprehensive Solutions
            </h2>
            <div className="w-20 h-1 bg-[#00bcd4] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Activity className="w-8 h-8" />,
                title: 'Medical Equipment',
                desc: 'State-of-the-art medical devices for hospitals and clinics.'
              },
              {
                icon: <Microscope className="w-8 h-8" />,
                title: 'Analytical Laboratory',
                desc: 'High-precision instruments for research and analysis.'
              },
              {
                icon: <FlaskConical className="w-8 h-8" />,
                title: 'Chemicals & Consumables',
                desc: 'Premium grade chemicals and laboratory consumables.'
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: 'Physiology & Anatomy Models',
                desc: 'Detailed physiology and forensic models for education.'
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
                  whileHover={{
                    y: -10,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                  }}
                  className="bg-gray-50 p-8 rounded-xl border border-gray-100 group cursor-pointer">

                  <motion.div
                    className="bg-white w-16 h-16 rounded-lg flex items-center justify-center text-[#1e3a5f] shadow-sm mb-6 group-hover:bg-[#1e3a5f] group-hover:text-white transition-colors"
                    whileHover={{
                      rotate: 360
                    }}
                    transition={{
                      duration: 0.6
                    }}>

                    {item.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-3 group-hover:text-[#00bcd4] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              )}
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 bg-[#1e3a5f] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="order-2 lg:order-1 bg-white/5 backdrop-blur-sm p-12 rounded-2xl border border-white/10"
              initial={{
                opacity: 0,
                x: -50
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.6
              }}>

              <h3 className="text-2xl font-bold text-[#00bcd4] mb-6">
                What We Offer
              </h3>
              <div className="space-y-4">
                {[
                  'Laboratory Equipment',
                  'Chemicals & Consumables',
                  'Physiology Models',
                  'Anatomy & Forensic Models',
                  'After-Sales Support',
                  'High-Quality Analytical Solutions',
                  'Life Science Applications',
                  'Industrial Applications'].
                  map((item, i) =>
                    <motion.div
                      key={i}
                      className="flex items-center space-x-3 text-gray-200"
                      initial={{
                        opacity: 0,
                        x: -20
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0
                      }}
                      viewport={{
                        once: true
                      }}
                      transition={{
                        delay: i * 0.05
                      }}>

                      <div className="w-2 h-2 bg-[#00bcd4] rounded-full"></div>
                      <span>{item}</span>
                    </motion.div>
                  )}
              </div>
            </motion.div>
            <motion.div
              className="order-1 lg:order-2"
              initial={{
                opacity: 0,
                x: 50
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.6
              }}>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Advancing Science Through Technology
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We bridge the gap between global innovation and local
                application. Our partnerships with world-class manufacturers
                ensure that Pakistani institutions have access to the best tools
                available.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Installation & Calibration Services',
                  'Preventive Maintenance & Repair',
                  'Application Training & Support',
                  'Consultancy for Lab Setup'].
                  map((item, i) =>
                    <motion.li
                      key={i}
                      className="flex items-center text-gray-200"
                      initial={{
                        opacity: 0,
                        x: -20
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0
                      }}
                      viewport={{
                        once: true
                      }}
                      transition={{
                        delay: i * 0.1
                      }}
                      whileHover={{
                        x: 10
                      }}>

                      <CheckCircle className="w-5 h-5 text-[#00bcd4] mr-3" />
                      {item}
                    </motion.li>
                  )}
              </ul>
              <Link to="/strengths">
                <motion.button
                  className="text-[#00bcd4] hover:text-white font-medium inline-flex items-center transition-colors"
                  whileHover={{
                    x: 10
                  }}>

                  Discover our strengths <ArrowRight className="ml-2 w-4 h-4" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div >);

}