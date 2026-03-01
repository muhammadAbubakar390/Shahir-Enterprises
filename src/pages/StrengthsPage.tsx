import { motion } from 'framer-motion';
import { ShieldCheck, Users, Map, Settings, Globe } from 'lucide-react';
export function StrengthsPage() {
  const strengths = [
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: 'Quality & Client Satisfaction',
      desc: 'We never compromise on quality. Every product, service, and partnership reflects our commitment to excellence and customer satisfaction.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Experienced Professionals',
      desc: 'Our team of highly qualified engineers and specialists brings years of expertise across scientific, analytical, and industrial domains.'
    },
    {
      icon: <Map className="w-8 h-8" />,
      title: 'Territory-Based Engineers',
      desc: 'With regional engineers stationed across Pakistan, we ensure quick response, on-site support, and reliable technical service wherever our clients operate.'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'End-to-End Solutions',
      desc: 'From consultation and installation to calibration, maintenance, and after-sales service — we handle everything, ensuring seamless operations.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Brand Partnerships',
      desc: 'We represent globally trusted manufacturers, bringing world-class technology and innovation to local industries, universities, and healthcare institutions.'
    }];

  return (
    <div className="pt-20">
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-4">
              Our Strengths
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Why leading institutions choose Shahir Enterprises as their
              preferred partner.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              {strengths.map((item, index) =>
                <motion.div
                  key={index}
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
                    delay: index * 0.1
                  }}
                  whileHover={{
                    x: 10,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                  }}
                  className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 transition-all duration-300 cursor-pointer group">

                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-12 h-12 bg-[#1e3a5f] rounded-lg flex items-center justify-center text-white group-hover:bg-[#00bcd4] transition-colors"
                      whileHover={{
                        rotate: 360
                      }}
                      transition={{
                        duration: 0.6
                      }}>

                      {item.icon}
                    </motion.div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1e3a5f] mb-2 group-hover:text-[#00bcd4] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              )}
            </div>

            <div className="lg:sticky lg:top-24 space-y-8">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1
                }}
                viewport={{
                  once: true
                }}
                className="bg-gradient-to-br from-[#1e3a5f] to-[#162c46] p-12 rounded-2xl text-white relative overflow-hidden">

                <div className="absolute top-0 right-0 w-64 h-64 bg-[#00bcd4]/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-6">Why Choose Us?</h3>
                  <div className="space-y-4">
                    {[
                      '24/7 Technical Support',
                      'ISO 9001:2015 Certified',
                      'Nationwide Coverage',
                      'Expert Installation',
                      'Preventive Maintenance',
                      'Training & Consultation',
                      'Genuine Products Only',
                      'Competitive Pricing'].
                      map((feature, i) =>
                        <motion.div
                          key={i}
                          className="flex items-center space-x-3"
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
                          <span className="text-gray-200">{feature}</span>
                        </motion.div>
                      )}
                  </div>
                </div>
              </motion.div>

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
                className="bg-[#00bcd4]/5 p-8 rounded-2xl border border-[#00bcd4]/20">

                <h4 className="text-2xl font-bold text-[#1e3a5f] mb-4">
                  Our Commitment
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  We are dedicated to providing not just equipment, but complete
                  solutions that empower Pakistan's scientific community to
                  achieve excellence in research, healthcare, and industry.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>);

}