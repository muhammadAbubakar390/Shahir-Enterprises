import { motion } from 'framer-motion';
import {
  Building2,
  GraduationCap,
  FlaskConical,
  Wheat,
  TestTube,
  Globe2
} from
  'lucide-react';
export function ClientsPage() {
  const clientCategories = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: 'Hospitals & Medical Colleges',
      desc: 'Serving healthcare institutions with cutting-edge medical equipment'
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'Universities & Research Institutes',
      desc: 'Empowering academic research with advanced laboratory solutions'
    },
    {
      icon: <FlaskConical className="w-6 h-6" />,
      title: 'Pharmaceutical & Biotechnology Industries',
      desc: 'Supporting drug development and biotech innovation'
    },
    {
      icon: <Wheat className="w-6 h-6" />,
      title: 'Forensic, Agriculture',
      desc: 'Specialized equipment for forensic analysis and agricultural research'
    },
    {
      icon: <TestTube className="w-6 h-6" />,
      title: 'Environmental & Food Testing Laboratories',
      desc: 'Ensuring safety and quality through precise testing'
    },
    {
      icon: <Globe2 className="w-6 h-6" />,
      title: 'International & Foreign-Funded Projects',
      desc: 'Partnering with global initiatives for scientific advancement'
    }];

  const keyInstitutions = [
    {
      name: 'Punjab Agriculture, Food & Drug Authority (PAFDA)',
      category: 'Government',
      logo: '/brands/pafda-logo.jif',
      website: 'https://pafda.gop.pk'
    },
    {
      name: 'National Institute of Health, Islamabad',
      category: 'Healthcare',
      logo: '/brands/national-institute-of-health.png',
      website: 'https://nih.org.pk'
    },
    {
      name: 'National University of Sciences and Technology (NUST)',
      category: 'Education',
      logo: '/brands/NUST-logo.png',
      website: 'https://nust.edu.pk'
    },
    {
      name: 'Pak-Austria Fachhochschule Institute of Applied Sciences and Technology',
      category: 'Education',
      logo: '/brands/pak-austria-loogo.png',
      website: 'https://paf-iast.edu.pk/'
    },
    {
      name: 'Bahria University, Islamabad Campus',
      category: 'Education',
      logo: '/brands/bahriauni-logo.png',
      website: 'https://bahria.edu.pk'
    },
    {
      name: 'Pak Red Crescent Medical & Dental College',
      category: 'Healthcare',
      logo: '/brands/pak-red-logo.png',
      website: 'https://prcmdc.edu.pk'
    },
    {
      name: 'Riphah International University',
      category: 'Education',
      logo: '/brands/riphah-logo.png',
      website: 'https://riphah.edu.pk'
    },
    {
      name: 'Isra University, Islamabad',
      category: 'Education',
      logo: '/brands/israuni-logo.png',
      website: 'https://isra.edu.pk'
    },
    {
      name: 'The University of Lahore',
      category: 'Education',
      logo: '/brands/uol-logo.png',
      website: 'https://uol.edu.pk'
    },
    {
      name: 'International Institute of Technology, Culture & Health Sciences',
      category: 'Education',
      logo: '/brands/itech-logo.png',
      website: 'https://i-tech.pk'
    },
    {
      name: 'Gomal University, D.I. Khan – KPK',
      category: 'Education',
      logo: '/brands/gomaluni-logo.png',
      website: 'https://gu.edu.pk/'
    },
    {
      name: 'Shifa Tameer-e-Millat University, Islamabad',
      category: 'Education',
      logo: '/brands/shifauni-logo.png',
      website: 'https://stmu.edu.pk'
    },
    {
      name: 'Shifa International Hospital, Islamabad',
      category: 'Healthcare',
      logo: '/brands/shifahospital-logo.png',
      website: 'https://www.shifa.com.pk'
    },
    {
      name: 'Obaid Noor Hospital & Institute of Medical Sciences, Mianwali',
      category: 'Healthcare',
      logo: '/brands/obaidnoor-logo.jpg',
      website: 'https://obaidnoorhospital.com'
    }];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-[#1e3a5f] text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00bcd4]/10 transform rotate-45 translate-x-32 -translate-y-32"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Clients</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We proudly serve leading public and private sector organizations
            across Pakistan
          </p>
        </div>
      </section>

      {/* Client Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">
              Sectors We Serve
            </h2>
            <p className="text-gray-600">
              Comprehensive solutions for diverse industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientCategories.map((category, index) =>
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
                  y: -8,
                  scale: 1.02
                }}
                className="group bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-[#00bcd4] hover:shadow-xl transition-all duration-300 cursor-pointer">

                <div className="w-14 h-14 bg-[#00bcd4]/10 rounded-xl flex items-center justify-center text-[#1e3a5f] mb-6 group-hover:bg-[#1e3a5f] group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-3 group-hover:text-[#00bcd4] transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {category.desc}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Key Institutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
              Key Institutions
            </h2>
            <p className="text-lg text-gray-600">
              Trusted by Pakistan's leading organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyInstitutions.map((institution, index) =>
              <a
                key={index}
                href={institution.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
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
                  transition={{
                    delay: index * 0.03
                  }}
                  whileHover={{
                    scale: 1.05
                  }}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#00bcd4] hover:shadow-md transition-all duration-300 cursor-pointer group h-full">

                  <div className="flex flex-col items-center text-center space-y-6">
                    <div className="w-full h-24 flex items-center justify-center p-2 rounded-xl bg-gray-50/50 group-hover:bg-white transition-colors duration-300">
                      {institution.logo ? (
                        <img
                          src={institution.logo}
                          alt={institution.name}
                          className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-4 h-4 bg-[#00bcd4] rounded-full group-hover:scale-150 transition-transform"></div>
                      )}
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-[#1e3a5f] text-lg leading-tight group-hover:text-[#00bcd4] transition-colors">
                        {institution.name}
                      </h4>
                      <div className="inline-block px-3 py-1 rounded-full bg-gray-100 text-[10px] font-bold text-gray-500 uppercase tracking-widest group-hover:bg-[#00bcd4]/10 group-hover:text-[#00bcd4] transition-all">
                        {institution.category}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Service Banner */}
      <section className="py-16 bg-gradient-to-r from-[#1e3a5f] to-[#162c46] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Serving Excellence Across Pakistan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From Karachi to Peshawar, our network of regional engineers
              ensures prompt, reliable service wherever you operate. We're
              committed to supporting Pakistan's scientific community with
              world-class equipment and expert technical support.
            </p>
          </div>
        </div>
      </section>
    </div>);

}