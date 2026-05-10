import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import svgPaths from "../../imports/svg-5k45rf2js3";
import imgHeroSectionImg1 from "../../assets/HeroSection.png";
import imgWhatsAppImage20260301At21844PmRemovebgPreview1 from "../../assets/e96a6ced8092b5131110e399e163e992c961dfab.png";
import { ConversionStrip } from "../../imports/shipping-cards";
import StatsCounter from "./StatsCounter";
import LogisticsChallenges from "./LogisticsChallenges";
import FeaturePanels from "./FeaturePanels";
import BusinessExpectations from "./BusinessExpectations";
import AboutUs from "./AboutUs";
import Gallery from "./Gallery";
import LocationsMap from "./LocationsMap";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import Footer from "./Footer";
import ContactModal from "./ContactModal";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen w-full">
      {/* Header */}
      <header className="bg-white shadow-[0px_4px_12.6px_0px_rgba(0,0,0,0.25)] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-[87px]">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                alt="Logo"
                className="h-24 w-auto sm:h-28 lg:h-[136px]"
                src={imgWhatsAppImage20260301At21844PmRemovebgPreview1}
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-10 font-['Inter',sans-serif] text-xs text-black">
              <a href="#services" className="hover:text-[#00a54f] transition-colors">Services</a>
              <a href="#about" className="hover:text-[#00a54f] transition-colors">About Us</a>
              <Link to="/network" className="hover:text-[#00a54f] transition-colors">Networks</Link>
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
              <a href="#services" className="block px-3 py-2 rounded-md hover:bg-gray-50 hover:text-[#00a54f]">
                Services
              </a>
              <a href="#about" className="block px-3 py-2 rounded-md hover:bg-gray-50 hover:text-[#00a54f]">
                About Us
              </a>
              <Link to="/network" className="block px-3 py-2 rounded-md hover:bg-gray-50 hover:text-[#00a54f]">
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

      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[400px] lg:h-[431px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            alt="Hero Background"
            className="w-full h-full object-cover"
            src={imgHeroSectionImg1}
          />
        </div>
        <div className="absolute inset-0 bg-[rgba(4,30,16,0.55)]" />
        <div className="relative h-full flex items-center justify-center px-4 text-center">
          <div className="max-w-4xl">
            <h1 className="font-['Inter',sans-serif] font-medium text-white text-2xl sm:text-3xl md:text-4xl lg:text-[52px] leading-tight">
              Your Goods
            </h1>
            <p className="font-['Inter',sans-serif] font-medium text-white text-2xl sm:text-3xl md:text-4xl lg:text-[52px] leading-tight mt-2">
              Our <span className="text-[#03e06d]">Wheels</span>
            </p>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <StatsCounter />

      {/* Services Section */}
      <ConversionStrip />

      {/* Logistics Challenges Section */}
      <LogisticsChallenges />

      {/* Feature Panels Section */}
      <FeaturePanels />

      {/* Business Expectations Section */}
      <BusinessExpectations />

      {/* Client Showcase Section */}
      {/* <ClientShowcase /> */}

      {/* About Us Section */}
      <AboutUs />

      {/* Locations Map Section */}
      <LocationsMap />

      {/* Gallery Section */}
      <Gallery />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <Footer />

      {/* Contact Modal */}
      <ContactModal open={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </div>
  );
}
