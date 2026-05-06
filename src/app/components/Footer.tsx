import { motion } from "motion/react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#1a1a1a] via-[#252525] to-[#1a1a1a] text-white">
      {/* Main Footer Content */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pt-12 sm:pt-14 lg:pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-8 sm:mb-10">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-['Poppins',sans-serif] text-[20px] sm:text-[22px] font-bold mb-4 text-[#00A54F]">
              Chinar Roadlines
            </h3>
            <p className="font-['Poppins',sans-serif] text-[#b0b0b0] text-[13px] sm:text-[14px] leading-relaxed mb-5">
              Connecting markets through smooth logistics. Your trusted partner for reliable, efficient, and cost-effective shipping solutions nationwide.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-['Poppins',sans-serif] text-[16px] sm:text-[17px] font-bold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="/#services"
                  className="font-['Poppins',sans-serif] text-[#b0b0b0] text-[13px] sm:text-[14px] hover:text-[#00A54F] transition-colors duration-300 flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Services</span>
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="font-['Poppins',sans-serif] text-[#b0b0b0] text-[13px] sm:text-[14px] hover:text-[#00A54F] transition-colors duration-300 flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">About Us</span>
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="font-['Poppins',sans-serif] text-[#b0b0b0] text-[13px] sm:text-[14px] hover:text-[#00A54F] transition-colors duration-300 flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Clients</span>
                </a>
              </li>
              <li>
                <Link
                  to="/network"
                  className="font-['Poppins',sans-serif] text-[#b0b0b0] text-[13px] sm:text-[14px] hover:text-[#00A54F] transition-colors duration-300 flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Networks</span>
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-['Poppins',sans-serif] text-[16px] sm:text-[17px] font-bold mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#services"
                  className="font-['Poppins',sans-serif] text-[#b0b0b0] text-[13px] sm:text-[14px] hover:text-[#00A54F] transition-colors duration-300 flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Part Load Enquiry</span>
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="font-['Poppins',sans-serif] text-[#b0b0b0] text-[13px] sm:text-[14px] hover:text-[#00A54F] transition-colors duration-300 flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Full Truck Load</span>
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="font-['Poppins',sans-serif] text-[#b0b0b0] text-[13px] sm:text-[14px] hover:text-[#00A54F] transition-colors duration-300 flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Booking Agency</span>
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-['Poppins',sans-serif] text-[16px] sm:text-[17px] font-bold mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#00A54F]/10 flex items-center justify-center mt-0.5">
                  <MapPin className="w-4 h-4 text-[#00A54F]" />
                </div>
                <div>
                  <p className="font-['Poppins',sans-serif] text-[#b0b0b0] text-[13px] sm:text-[14px] leading-relaxed">
                    BG-338, BG-339 Sanjay Gandhi Tpt Nagar, Delhi
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#00A54F]/10 flex items-center justify-center mt-0.5">
                  <Phone className="w-4 h-4 text-[#00A54F]" />
                </div>
                <div>
                  <div className="flex flex-col gap-1.5">
                    <a href="tel:+919811323625" className="font-['Poppins',sans-serif] text-[#b0b0b0] text-[13px] sm:text-[14px] hover:text-[#00A54F] transition-colors duration-300 flex items-center gap-1">
                      +91 98113 23625
                    </a>
                    <a href="tel:+919999021625" className="font-['Poppins',sans-serif] text-[#b0b0b0] text-[13px] sm:text-[14px] hover:text-[#00A54F] transition-colors duration-300 flex items-center gap-1">
                      +91 99990 21625
                    </a>
                    <a href="tel:+919899230165" className="font-['Poppins',sans-serif] text-[#b0b0b0] text-[13px] sm:text-[14px] hover:text-[#00A54F] transition-colors duration-300 flex items-center gap-1">
                      +91 98992 30165
                    </a>
                    <a href="tel:+919810645255" className="font-['Poppins',sans-serif] text-[#b0b0b0] text-[13px] sm:text-[14px] hover:text-[#00A54F] transition-colors duration-300 flex items-center gap-1">
                      +91 98106 45255
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#00A54F]/10 flex items-center justify-center mt-0.5">
                  <Mail className="w-4 h-4 text-[#00A54F]" />
                </div>
                <div>
                  <p className="font-['Poppins',sans-serif] text-[#b0b0b0] text-[13px] sm:text-[14px]">
                    chinarroadlinesdelhi@gmail.com
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-col items-center sm:items-start gap-1.5">
              <p className="font-['Poppins',sans-serif] text-[#888] text-[12px] sm:text-[13px] text-center sm:text-left">
                © {currentYear} Chinar Roadlines. All rights reserved.
              </p>
              <p className="font-['Poppins',sans-serif] text-[#888] text-[12px] sm:text-[13px] text-center sm:text-left">
                develop by{" "}
                <a
                  href="https://www.xpanix.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00A54F] hover:underline transition-colors duration-300"
                >
                  xpanix
                </a>
              </p>
            </div>
            <div className="flex gap-5">
              <a
                href="#"
                className="font-['Poppins',sans-serif] text-[#888] text-[12px] sm:text-[13px] hover:text-[#00A54F] transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="font-['Poppins',sans-serif] text-[#888] text-[12px] sm:text-[13px] hover:text-[#00A54F] transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="font-['Poppins',sans-serif] text-[#888] text-[12px] sm:text-[13px] hover:text-[#00A54F] transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
