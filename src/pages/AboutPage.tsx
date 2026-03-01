import { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Users, Lightbulb, Target, Award } from 'lucide-react';

function Counter({ value, duration = 2 }: { value: string; duration?: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Extract number and suffix (e.g., "500+" -> { num: 500, suffix: "+" })
  const num = parseInt(value.replace(/[^0-9]/g, ''));
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, num, {
        duration: duration,
        onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
        ease: "easeOut"
      });
      return () => controls.stop();
    }
  }, [isInView, num, duration]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
}

export function AboutPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gray-50 py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00bcd4]/5 transform rotate-45 translate-x-32 -translate-y-32"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-[#1e3a5f] mb-6"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed"
          >
            A distinguished journey of excellence, providing world-class scientific
            and medical solutions across Pakistan for over a decade.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-12 border-t border-gray-200"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-24 max-w-7xl mx-auto">

              {[
                {
                  value: '10+',
                  label: 'Years Experience'
                },
                {
                  value: '500+',
                  label: 'Clients Served'
                },
                {
                  value: '100%',
                  label: 'Quality Assured'
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="flex flex-col items-center"
                >
                  <h3 className="text-5xl font-extrabold text-[#1e3a5f] mb-2 tabular-nums">
                    <Counter value={stat.value} />
                  </h3>
                  <p className="text-gray-500 font-semibold tracking-wide uppercase text-sm">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column */}
            <div className="space-y-8">
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

                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00bcd4]/20 rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-6">
                    <Award className="w-8 h-8 text-[#00bcd4]" />
                    <h3 className="text-2xl font-bold">Who We Are</h3>
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    Shahir Enterprises is a Pakistan-based organization
                    specializing in Laboratory Equipment, Chemicals &
                    Consumables, Physiology Models, Anatomy & Forensic Models,
                    and after-sales support for high-quality Analytical, Life
                    Science, and industrial applications.
                  </p>
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

                <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">
                  Our Commitment
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  From humble beginnings, we've grown into a trusted name in
                  scientific and analytical solutions, committed to continuous
                  improvement and customer satisfaction.
                </p>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">
                  Our Journey
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Shahir Enterprises began with a mission to provide innovative,
                  reliable solutions for laboratories and research institutions
                  across Pakistan.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We've established ourselves as a trusted partner for
                  scientific excellence, serving leading institutions nationwide
                  with dedication and expertise.
                </p>
              </div>

              <div className="space-y-8">
                <motion.div
                  className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100"
                  initial={{
                    opacity: 0,
                    x: 20
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0
                  }}
                  viewport={{
                    once: true
                  }}
                  whileHover={{
                    scale: 1.02
                  }}>

                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-[#00bcd4]/10 rounded-lg flex items-center justify-center text-[#00bcd4]">
                      <Users className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">
                      Diversity
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      We believe diversity drives innovation. Our team brings
                      together people from different backgrounds, lifestyles,
                      and perspectives — creating a culture of collaboration and
                      creativity.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100"
                  initial={{
                    opacity: 0,
                    x: 20
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    delay: 0.1
                  }}
                  whileHover={{
                    scale: 1.02
                  }}>

                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-[#00bcd4]/10 rounded-lg flex items-center justify-center text-[#00bcd4]">
                      <Target className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">
                      Team Spirit
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Our principle: "Business, transparency, and trust — with a
                      spirit of teamwork and fun!" We work together towards
                      shared goals, maintaining an approachable atmosphere and
                      quick decision-making.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100"
                  initial={{
                    opacity: 0,
                    x: 20
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    delay: 0.2
                  }}
                  whileHover={{
                    scale: 1.02
                  }}>

                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-[#00bcd4]/10 rounded-lg flex items-center justify-center text-[#00bcd4]">
                      <Lightbulb className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">
                      Continuous Learning
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      The expertise of our people is the foundation of our
                      success. We invest continuously in training and skill
                      development, ensuring that innovation and quality remain
                      at the heart of everything we do. We welcome new talent,
                      fresh ideas, and a shared passion for scientific
                      excellence.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Banner */}
      <section className="py-16 bg-gradient-to-r from-[#1e3a5f] to-[#162c46]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Join Our Growing Network
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We welcome new talent, fresh ideas, and a shared passion for
              scientific excellence. Be part of a team that is shaping the
              future of science in Pakistan.
            </p>
            <motion.div
              className="inline-flex items-center space-x-8"
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

              {[
                {
                  icon: <Users className="w-8 h-8" />,
                  label: 'Collaborative'
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  label: 'Goal-Oriented'
                },
                {
                  icon: <Lightbulb className="w-8 h-8" />,
                  label: 'Innovative'
                }].
                map((item, index) =>
                  <motion.div
                    key={index}
                    className="flex flex-col items-center"
                    whileHover={{
                      scale: 1.1,
                      y: -5
                    }}>

                    <div className="w-16 h-16 bg-[#00bcd4]/20 rounded-full flex items-center justify-center mb-3 text-[#00bcd4]">
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium">{item.label}</span>
                  </motion.div>
                )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>);

}