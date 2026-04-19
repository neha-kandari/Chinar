import { motion } from "motion/react";
import { Link } from "react-router";
import { MapPin, ExternalLink, ArrowRight } from "lucide-react";
import mapImage from "../../assets/Map.jpeg";

const locations = [
  {
    id: 1,
    label: "Nayabazaar, Delhi",
    address: "4013, Nayabazaar Main Road, Delhi",
    mapsUrl:
      "https://www.google.com/maps/search/4013+nayabazaar+main+road+delhi",
  },
  {
    id: 2,
    label: "Transport Nagar, Delhi (BG338)",
    address: "BG338, Sanjay Gandhi Transport Nagar, Delhi",
    mapsUrl:
      "https://www.google.com/maps/search/BG338+Sanjay+Gandhi+Transport+Nagar+Delhi",
  },
  {
    id: 3,
    label: "Transport Nagar, Delhi (BG339)",
    address: "BG339, Sanjay Gandhi Transport Nagar, Delhi",
    mapsUrl:
      "https://www.google.com/maps/search/BG339+Sanjay+Gandhi+Transport+Nagar+Delhi",
  },
  {
    id: 4,
    label: "Swastik Road, Panipat",
    address: "715 D, Swastik Road, Panipat, Haryana",
    mapsUrl:
      "https://www.google.com/maps/search/715+D+Swastik+Road+Panipat+Haryana",
  },
  {
    id: 5,
    label: "Rawal Pindi Garden, UP Border",
    address: "A4/21, Rawal Pindi Garden, UP Border",
    mapsUrl:
      "https://www.google.com/maps/search/A4+21+Rawal+Pindi+Garden+UP+Border",
  },
];

export default function LocationsMap() {
  return (
    <section
      id="locations"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-[#f4fbf7] px-4 sm:px-6 lg:px-[80px] xl:px-[139px] overflow-hidden"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 sm:mb-16"
      >
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 bg-[#00A54F] rounded-full" />
          <span className="font-['Poppins',sans-serif] text-[#00A54F] text-[12px] sm:text-[13px] uppercase tracking-wider font-semibold">
            OUR LOCATIONS
          </span>
        </div>
        <h2 className="font-['Poppins',sans-serif] font-bold text-[#023018] text-[32px] sm:text-[42px] lg:text-[48px] leading-tight mb-4">
          Where We Operate
        </h2>
        <p className="font-['Poppins',sans-serif] text-[#5a5a5a] text-[15px] sm:text-[17px] leading-relaxed max-w-[700px] mx-auto">
          Strategically placed across Northern India, our offices ensure fast,
          reliable logistics coverage for your business.
        </p>
      </motion.div>

      {/* Main Content: Map + Single Locations Card */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">

        {/* LEFT — Map Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#d4edd8] bg-white h-full flex items-start"
        >
          {/* Green accent bar on top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00A54F] via-[#00d866] to-[#00A54F] z-10" />

          <img
            src={mapImage}
            alt="Northern India Logistics Coverage Map"
            className="w-full h-full object-contain block"
          />

          {/* Map overlay badge */}
          <div className="absolute bottom-4 left-4 bg-[#023018]/90 text-white px-4 py-2 rounded-lg backdrop-blur-sm flex items-center gap-2 shadow-lg z-10">
            <MapPin size={14} className="text-[#00A54F]" />
            <span className="font-['Poppins',sans-serif] text-xs font-semibold">
              Coverage: North India
            </span>
          </div>
        </motion.div>

        {/* RIGHT — Single Locations Card matching map height */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl overflow-hidden shadow-2xl border-2 border-[#d4edd8] flex flex-col h-full"
        >

          {/* Locations List — grows to fill remaining height */}
          <div className="flex-1 flex flex-col divide-y divide-[#e8f5ee] bg-white">
            {locations.map((loc, i) => (
              <motion.a
                key={loc.id}
                href={loc.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group flex items-center gap-4 px-6 py-4 hover:bg-[#f4fbf7] transition-colors duration-200 cursor-pointer"
              >
                {/* Number badge */}
                <div className="flex-shrink-0 w-9 h-9 bg-gradient-to-br from-[#00A54F] to-[#00d866] rounded-lg flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-[13px] font-['Poppins',sans-serif]">
                    {loc.id}
                  </span>
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p className="font-['Poppins',sans-serif] text-[10px] font-semibold text-[#00A54F] uppercase tracking-wider mb-0.5">
                    Office {loc.id}
                  </p>
                  <h4 className="font-['Poppins',sans-serif] font-bold text-[#023018] text-[14px] sm:text-[15px] leading-snug truncate">
                    {loc.label}
                  </h4>
                  <p className="font-['Poppins',sans-serif] text-gray-400 text-[12px] mt-0.5 leading-snug truncate">
                    {loc.address}
                  </p>
                </div>

                {/* Arrow */}
                <ExternalLink
                  size={14}
                  className="flex-shrink-0 text-gray-300 group-hover:text-[#00A54F] transition-colors duration-200"
                />
              </motion.a>
            ))}
          </div>

          {/* Card Action Button */}
          <div className="p-6 bg-white border-t border-[#e8f5ee]">
            <Link
              to="/network"
              className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-[#023018] to-[#01491e] text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group"
            >
              <span className="font-['Poppins',sans-serif]">View Full Network</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
