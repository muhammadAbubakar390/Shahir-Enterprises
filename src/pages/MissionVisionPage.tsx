import { motion } from 'framer-motion';

export function MissionVisionPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-[#1e3a5f] text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00bcd4]/10 transform rotate-45 translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00bcd4]/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Mission & Vision
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Guided by purpose, driven by innovation. Our roadmap for the future
            of scientific excellence.
          </p>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-[#00bcd4] shadow-xl flex-shrink-0">
              <img
                src="/C-E-O.jpeg"
                alt="Mian Rashid, CEO"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-[#1e3a5f]">Mian Rashid</h2>
              <p className="text-[#00bcd4] font-medium mb-4">
                Chief Executive Officer
              </p>
              <div className="relative">
                <p 
                  className="text-gray-700 italic relative z-10 text-xl leading-relaxed"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Our commitment goes beyond selling equipment. We are
                  dedicated to empowering the scientific community of Pakistan
                  with the tools they need to discover, innovate, and heal.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
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
              className="bg-gray-50 p-8 rounded-2xl border-t-4 border-[#1e3a5f] shadow-sm hover:shadow-md transition-shadow">

              <h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">
                MISSION
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                To deliver advanced scientific and analytical solutions that
                empower research, healthcare, and industry through quality,
                innovation, and customer-centric service.
              </p>
            </motion.div>

            {/* Vision Card */}
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
                delay: 0.2
              }}
              className="bg-[#1e3a5f] p-8 rounded-2xl border-t-4 border-[#00bcd4] shadow-sm hover:shadow-md transition-shadow text-white">

              <h2 className="text-3xl font-bold text-white mb-6">VISION</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                To become Pakistan's most trusted and innovative partner in
                scientific and analytical instruments — driving progress in
                research, healthcare, and industry.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Decorative Bottom */}
      <div className="h-24 bg-gradient-to-r from-[#1e3a5f] to-[#162c46] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-white transform rotate-45 translate-y-32 translate-x-32"></div>
        </div>
      </div>
    </div>
  );
}