import { useState, FormEvent } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
export function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mqaevepk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message,
        }),
      });

      if (response.ok) {
        alert('Thank you! Your message has been sent to info@shahirent.com. We will get back to you shortly.');
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        alert('Oops! There was a problem. Please try again or email us directly at info@shahirent.com');
      }
    } catch (error) {
      alert('Oops! There was a connection error. Please check your internet or email us directly at info@shahirent.com');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="pt-20">
      <section className="bg-[#1e3a5f] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300">
            Get in touch with our team for inquiries and support.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                      <img src="/whatsapp-logo.svg" className="w-6 h-6" alt="WhatsApp" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600 text-sm mt-1">
                        +92 321 428 1313
                      </p>
                      <p className="text-gray-600 text-sm">+92 321 477 2772</p>
                      <p className="text-gray-600 text-sm">+92 42 36 53 5626</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-[#00bcd4]/10 rounded-lg flex items-center justify-center text-[#00bcd4] flex-shrink-0 mr-4">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a
                        href="mailto:info@shahirent.com"
                        className="text-gray-600 text-sm mt-1 hover:text-[#00bcd4]">

                        info@shahirent.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-[#00bcd4]/10 rounded-lg flex items-center justify-center text-[#00bcd4] flex-shrink-0 mr-4">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Address</p>
                      <p className="text-gray-600 text-sm mt-1">
                        Lahore, Pakistan
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#1e3a5f] p-8 rounded-2xl text-white">
                <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">
                  Send us a Message
                </h2>
                <form
                  action="https://formspree.io/f/mqaevepk"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2">

                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00bcd4] focus:border-transparent outline-none transition-all"
                        placeholder="Your Name"
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            name: e.target.value
                          })
                        } />

                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2">

                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00bcd4] focus:border-transparent outline-none transition-all"
                        placeholder="abc@example.com"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            email: e.target.value
                          })
                        } />

                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2">

                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00bcd4] focus:border-transparent outline-none transition-all"
                      placeholder="Product Inquiry"
                      value={formState.subject}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          subject: e.target.value
                        })
                      } />

                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2">

                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00bcd4] focus:border-transparent outline-none transition-all resize-none"
                      placeholder="How can we help you?"
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          message: e.target.value
                        })
                      }>
                    </textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full md:w-auto px-8 py-4 bg-[#1e3a5f] text-white font-bold rounded-lg hover:bg-[#162c46] transition-colors flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}>

                    {isSubmitting ? 'Sending...' : 'Send Message'} <Send className="ml-2 w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>);

}