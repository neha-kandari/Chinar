import { motion } from "motion/react";

type Client = {
  name: string;
  category: string;
};

// Local clients data
const localClients: Client[] = [
  { name: "ABC Manufacturing", category: "Manufacturing" },
  { name: "BuildPro Supplies", category: "Construction" },
  { name: "Regional Industries", category: "Manufacturing" },
  { name: "Metro Distributors", category: "Retail" },
  { name: "Prime Agro Products", category: "Agriculture" },
  { name: "Local Steel Works", category: "Industrial" },
  { name: "City Retail Hub", category: "Retail" },
  { name: "Fresh Goods Co.", category: "FMCG" },
  { name: "Regional Traders", category: "Distribution" },
  { name: "Local Supplies Inc.", category: "Wholesale" },
];

// National brands & corporates data
const nationalBrands: Client[] = [
  { name: "Global Retail Corp.", category: "Retail" },
  { name: "TechParts Industries", category: "Industrial" },
  { name: "Fresh Foods Ltd.", category: "FMCG" },
  { name: "Quality Equipment Co.", category: "Industrial" },
  { name: "FastMove Logistics", category: "Distribution" },
  { name: "National Supply Chain", category: "Logistics" },
];

type LocalLogoCardProps = {
  client: Client;
  index: number;
};

function LocalLogoCard({ client, index }: LocalLogoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
      className="group"
    >
      <div className="bg-white rounded-lg p-3 sm:p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,165,79,0.12)] hover:-translate-y-1 grayscale group-hover:grayscale-0 cursor-pointer h-[70px] sm:h-[80px] flex items-center justify-center border border-gray-100">
        {/* Placeholder for logo */}
        <div className="text-center">
          <p className="font-['Poppins',sans-serif] font-semibold text-[#023018] text-[11px] sm:text-[12px] leading-tight mb-1">
            {client.name}
          </p>
          <p className="font-['Poppins',sans-serif] text-[#00A54F] text-[8px] sm:text-[9px] uppercase tracking-wide opacity-70">
            {client.category}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

type NationalLogoCardProps = {
  client: Client;
  index: number;
};

function NationalLogoCard({ client, index }: NationalLogoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
      className="group"
    >
      <div className="relative bg-white rounded-xl p-5 sm:p-6 shadow-[0_3px_12px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_6px_28px_rgba(0,165,79,0.15)] hover:-translate-y-1 grayscale group-hover:grayscale-0 cursor-pointer h-[95px] sm:h-[110px] flex items-center justify-center border border-gray-50">
        {/* Placeholder for logo */}
        <div className="text-center">
          <p className="font-['Poppins',sans-serif] font-bold text-[#023018] text-[14px] sm:text-[16px] leading-tight mb-1">
            {client.name}
          </p>
          <p className="font-['Poppins',sans-serif] text-[#00A54F] text-[9px] sm:text-[10px] uppercase tracking-wide opacity-80">
            {client.category}
          </p>
        </div>

        {/* Green underline animation */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-[#00A54F] transition-all duration-300 group-hover:w-[70%] rounded-full" />
      </div>
    </motion.div>
  );
}

export default function ClientShowcase() {
  return (
    <section id="clients" className="bg-[#f8f9fa] py-12 sm:py-16 lg:py-20 px-4">
      <div className="max-w-[1300px] mx-auto">
        {/* Main Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="font-['Poppins',sans-serif] font-bold text-[#023018] text-[32px] sm:text-[38px] lg:text-[44px] leading-tight mb-3">
            Clients & Partnerships
          </h2>
          <p className="font-['Poppins',sans-serif] text-[#5a5a5a] text-[14px] sm:text-[16px] leading-relaxed max-w-[700px] mx-auto">
            Proudly serving businesses from regional industries to national
            brands.
          </p>
        </motion.div>

        {/* LOCAL BUSINESSES SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 sm:mb-14 lg:mb-16"
        >
          {/* Subsection Header with Green Accent */}
          <div className="flex items-start gap-3 sm:gap-4 mb-6 sm:mb-7">
            <div className="w-1 h-10 sm:h-12 bg-[#00A54F] flex-shrink-0 rounded-full" />
            <div>
              <h3 className="font-['Poppins',sans-serif] font-bold text-[#023018] text-[22px] sm:text-[26px] lg:text-[28px] leading-tight mb-2">
                Local Businesses We Power
              </h3>
              <p className="font-['Poppins',sans-serif] text-[#5a5a5a] text-[13px] sm:text-[14px] leading-relaxed">
                Supporting regional manufacturers, distributors, and traders
                with reliable freight solutions.
              </p>
            </div>
          </div>

          {/* Logo Grid - 5 columns on desktop, compact */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {localClients.map((client, index) => (
              <LocalLogoCard key={index} client={client} index={index} />
            ))}
          </div>
        </motion.div>

        {/* NATIONAL BRANDS SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Subsection Header with Green Accent */}
          <div className="flex items-start gap-3 sm:gap-4 mb-6 sm:mb-7">
            <div className="w-1 h-10 sm:h-12 bg-[#00A54F] flex-shrink-0 rounded-full" />
            <div>
              <h3 className="font-['Poppins',sans-serif] font-bold text-[#023018] text-[22px] sm:text-[26px] lg:text-[28px] leading-tight mb-2">
                Trusted by Growing & National Brands
              </h3>
              <p className="font-['Poppins',sans-serif] text-[#5a5a5a] text-[13px] sm:text-[14px] leading-relaxed">
                Delivering scalable logistics solutions for established and
                expanding enterprises.
              </p>
            </div>
          </div>

          {/* Logo Grid - 3 columns on desktop, more spacing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {nationalBrands.map((client, index) => (
              <NationalLogoCard key={index} client={client} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}