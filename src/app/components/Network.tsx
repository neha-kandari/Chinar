import { motion } from "motion/react";
import { MapPin, Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import svgPaths from "../../imports/svg-5k45rf2js3";
import imgLogo from "../../assets/e96a6ced8092b5131110e399e163e992c961dfab.png";
import ContactModal from "./ContactModal";
import Footer from "./Footer";

const networkLocations = [
  "AMB", "ALAMPUR", "ANNI", "ARKI", "AUT", "BADDI", "BANGANA", "BHOTA",
  "BAIJNATH", "BANIKHET", "BALDWARA", "BILASPUR", "BERRI", "BARMANA",
  "BERTHIN", "BHUNTER", "BHARWAIN", "BHAWANAGAR", "BHAWARNA", "CHAILLA",
  "CHAMBA", "CHURAG", "CHIRGAON", "CHINTPURNI", "CHONTRA", "DOBHI",
  "DALHOUSIE", "DHALLI", "DEHRA", "DHALIYARA", "DHARMPUR", "DHARMSHALA",
  "DAMTAL", "GAGGAL", "GAGRET", "GUMMA", "GHUMARWIN", "HAMIRPUR",
  "JUBBAL", "JAHU", "JAKHRI", "JAWALAMUKHI", "JOGINDER", "JEORY",
  "JASSURE", "KANDAGHAT", "KHARAPATTHAR", "KANDROUR", "KINGAL", "KANGRA",
  "KALKA", "KULLU", "KALA AMB", "KUMARHATTI", "KUNIHAR", "KARSOG",
  "KUMARSAIN", "KOTHKHAI", "KUTHERA", "LADROUR", "LUHRI", "MANDI",
  "MEHATPUR", "MANALI", "MARINDA", "MEHRE", "MASHOBRA", "MATIANA",
  "NERCHOWK", "NADOUN", "NOGLI", "NAGROTA", "NAHAN", "NARKANDA",
  "NALAGARH", "NIRTH", "PINJORE", "PALAMPUR", "PANDOH", "PANARSA",
  "PAUNTA SAHIB", "PAPROLA", "PRAGPUR", "PATTA", "PATLIKUHAL", "PARWANOO",
  "RAJGARH", "RAIT", "RECONGPEO", "ROHRU", "RAMPUR", "RANITAL",
  "SUBATHU", "SOGHI", "SUNGRA", "SARKAGHAT", "SHAHPUR", "SANJOLI",
  "SUJANPUR", "SALONI", "SALAPPAR", "SHIMLA", "SUNNI", "SUNDERNAGAR",
  "SOLAN", "SAPROON", "SHAHTALAI", "SAWRA", "SWARGHAT", "THEOG",
  "TUNUHATTI", "TAPRI", "SSPUR TARRACE", "TATAPANI", "TUTU", "UNA", "YOL CAMP",
  "KATHUA", "DAYALACHAK", "HIRANAGAR", "SAMBA", "VIJAYPUR", "BARI BRAHMANA", 
  "GHAGWAL", "JAMMU", "AKHNOOR", "SUNDERBANI", "RAJOURI", "POONCH", 
  "NOWSHERA", "NAGROTA", "KATRA", "UDHAMPUR", "DODA", "BHADERWAH", 
  "KISHTWAR", "RAMBAN", "BANIHAL", "SRINAGAR", "KUPWARA", "SOPORE", 
  "BARAMULLA", "GANDERBAL", "DRASS", "KARGIL", "LEH (UT)"
];

export default function Network() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const message = `*Network Enquiry - Chinar Roadlines*
    
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Location:* ${formData.location}

*Message:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/919811323695?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", location: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white min-h-screen w-full">
      {/* Header */}
      <header className="bg-white shadow-[0px_4px_12.6px_0px_rgba(0,0,0,0.25)] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-[87px]">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                alt="Logo"
                className="h-24 w-auto sm:h-28 lg:h-[136px]"
                src={imgLogo}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-10 font-['Inter',sans-serif] text-xs text-black">
              <a href="/#services" className="hover:text-[#00a54f] transition-colors">Services</a>
              <a href="/#about" className="hover:text-[#00a54f] transition-colors">About Us</a>
              <Link to="/network" className="text-[#00a54f] font-semibold">Networks</Link>
            </nav>

            {/* Contact Button (Desktop) */}
            <button
              onClick={() => setContactModalOpen(true)}
              className="hidden md:flex items-center gap-2 bg-[#00a54f] text-white px-6 py-3 hover:bg-[#008f44] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 22 22">
                <path d={svgPaths.p7a47280} fill="white" />
              </svg>
              <span className="font-['Inter',sans-serif] font-semibold text-sm">Contact Us</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-[#00a54f] hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="px-4 pt-2 pb-3 space-y-1 font-['Inter',sans-serif] text-xs">
              <a href="/#services" className="block px-3 py-2 rounded-md hover:bg-gray-50 hover:text-[#00a54f]">
                Services
              </a>
              <a href="/#about" className="block px-3 py-2 rounded-md hover:bg-gray-50 hover:text-[#00a54f]">
                About Us
              </a>
              <Link to="/network" className="block px-3 py-2 rounded-md bg-gray-50 text-[#00a54f] font-semibold">
                Networks
              </Link>
              <button
                onClick={() => {
                  setContactModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#00a54f] text-white px-6 py-3 rounded-md mt-3"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 22 22">
                  <path d={svgPaths.p7a47280} fill="white" />
                </svg>
                <span className="font-semibold text-sm">Contact Us</span>
              </button>
            </nav>
          </div>
        )}
      </header>

      <section id="networks" className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50 px-4 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-10 w-96 h-96 bg-[#00A54F] rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#00A54F] rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-[1400px] mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 sm:mb-20"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-[#00A54F] rounded-full animate-pulse" />
              <span className="font-['Poppins',sans-serif] text-[#00A54F] text-sm uppercase tracking-wider font-semibold">
                PAN-INDIA PRESENCE
              </span>
            </div>

            {/* Title */}
            <h2 className="font-['Poppins',sans-serif] font-bold text-[#023018] text-[36px] sm:text-[48px] lg:text-[58px] leading-tight mb-6">
              Our Network Across
              <br />
              <span className="text-[#00A54F]">Himachal & Kashmir</span>
            </h2>

            {/* Subtitle */}
            <p className="font-['Poppins',sans-serif] text-[#5a5a5a] text-[15px] sm:text-[17px] leading-relaxed max-w-[800px] mx-auto">
              With <strong>117+ service locations</strong> across Himachal Pradesh and Kashmir,
              we ensure seamless logistics coverage in every corner of the region.
            </p>
          </motion.div>


          {/* Network Locations Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-20"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 lg:p-16 border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00A54F] to-[#00d866] rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-['Poppins',sans-serif] font-bold text-[#023018] text-2xl sm:text-3xl">
                  All Service Locations
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
                {networkLocations.map((location, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.3, delay: index * 0.01 }}
                    className="group"
                  >
                    <div className="relative bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-3 sm:p-4 hover:border-[#00A54F] hover:shadow-lg transition-all duration-300 cursor-pointer">
                      {/* Green accent on hover */}
                      <div className="absolute top-0 left-0 w-0 h-1 bg-[#00A54F] rounded-t-xl transition-all duration-300 group-hover:w-full" />

                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#00A54F] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <p className="font-['Poppins',sans-serif] text-[#5a5a5a] group-hover:text-[#00A54F] text-[11px] sm:text-[12px] font-medium transition-colors duration-300">
                          {location}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            id="contact-form"
          >
            <div className="bg-gradient-to-br from-[#00A54F] to-[#00d866] rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left Side - Form Info */}
                <div className="p-6 sm:p-8 lg:p-10 text-white">
                  <h3 className="font-['Poppins',sans-serif] font-bold text-3xl sm:text-4xl mb-4">
                    Get In Touch With Us
                  </h3>
                  <p className="font-['Poppins',sans-serif] text-white/90 text-base sm:text-lg leading-relaxed mb-6">
                    Have questions about our network or need logistics support?
                    Reach out to us and we'll connect you with the nearest service location.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-['Poppins',sans-serif] font-semibold text-white text-lg mb-1">
                          Call Us
                        </h4>
                        <p className="font-['Poppins',sans-serif] text-white/80 text-sm">
                          +91 98113 23695
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-['Poppins',sans-serif] font-semibold text-white text-lg mb-1">
                          Email Us
                        </h4>
                        <p className="font-['Poppins',sans-serif] text-white/80 text-sm">
                          chinarroadlinesdelhi@gmail.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-['Poppins',sans-serif] font-semibold text-white text-lg mb-1">
                          Visit Us
                        </h4>
                        <p className="font-['Poppins',sans-serif] text-white/80 text-sm">
                          BG-338, BG-339 Sanjay Gandhi Tpt Nagar, Delhi
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Contact Form */}
                <div className="bg-white p-6 sm:p-8 lg:p-10">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block font-['Poppins',sans-serif] text-[#023018] font-semibold text-sm mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl focus:border-[#00A54F] focus:outline-none transition-colors duration-300 font-['Poppins',sans-serif] text-sm"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block font-['Poppins',sans-serif] text-[#023018] font-semibold text-sm mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl focus:border-[#00A54F] focus:outline-none transition-colors duration-300 font-['Poppins',sans-serif] text-sm"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block font-['Poppins',sans-serif] text-[#023018] font-semibold text-sm mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl focus:border-[#00A54F] focus:outline-none transition-colors duration-300 font-['Poppins',sans-serif] text-sm"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <label htmlFor="location" className="block font-['Poppins',sans-serif] text-[#023018] font-semibold text-sm mb-2">
                        Nearest Location
                      </label>
                      <select
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#00A54F] focus:outline-none transition-colors duration-300 font-['Poppins',sans-serif] text-sm"
                      >
                        <option value="">Select a location</option>
                        {networkLocations.map((location, index) => (
                          <option key={index} value={location}>
                            {location}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block font-['Poppins',sans-serif] text-[#023018] font-semibold text-sm mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={3}
                        className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl focus:border-[#00A54F] focus:outline-none transition-colors duration-300 font-['Poppins',sans-serif] text-sm resize-none"
                        placeholder="Tell us about your logistics needs..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitted}
                      className="w-full bg-gradient-to-r from-[#00A54F] to-[#00d866] text-white font-['Poppins',sans-serif] font-semibold py-3 rounded-xl hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {submitted ? "Message Sent! ✓" : "Send Message"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
