import { motion } from "motion/react";
import {
  MapPin,
  Truck,
  Users,
  Radio,
  Factory,
  Handshake,
  Clock,
  FileCheck,
  DollarSign,
  Globe,
} from "lucide-react";

type Feature = {
  number: string;
  icon: React.ElementType;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    number: "01",
    icon: MapPin,
    title: "Extensive Transport Network",
    description:
      "Pan-India operational coverage ensuring seamless freight movement across major cities and industrial hubs.",
  },
  {
    number: "02",
    icon: Truck,
    title: "Modern & Diverse Fleet",
    description:
      "A well-maintained fleet equipped to handle part loads, full truck loads, and specialized cargo.",
  },
  {
    number: "03",
    icon: Users,
    title: "Skilled Logistics Professionals",
    description:
      "Experienced drivers and supply chain experts ensuring safe and timely delivery.",
  },
  {
    number: "04",
    icon: Radio,
    title: "Advanced Tracking Systems",
    description:
      "Real-time GPS tracking and digital documentation for full shipment transparency.",
  },
  {
    number: "05",
    icon: Factory,
    title: "Industry-Specific Expertise",
    description:
      "Serving multiple sectors including FMCG, manufacturing, retail, and industrial goods.",
  },
  {
    number: "06",
    icon: Handshake,
    title: "Strong Business Relationships",
    description:
      "Long-term partnerships built on trust, reliability, and consistent performance.",
  },
  {
    number: "07",
    icon: Clock,
    title: "On-Time Delivery Commitment",
    description:
      "Optimized route planning and operational precision to minimize delays.",
  },
  {
    number: "08",
    icon: FileCheck,
    title: "Regulatory Compliance Assured",
    description:
      "Adherence to transportation laws, documentation standards, and safety protocols.",
  },
  {
    number: "09",
    icon: DollarSign,
    title: "Competitive & Transparent Pricing",
    description: "Cost-efficient logistics solutions without hidden charges.",
  },
  {
    number: "10",
    icon: Globe,
    title: "Wide Network of Branches & Partners",
    description:
      "Strategically located hubs enabling faster turnaround and better service coverage.",
  },
];

type FeatureCardProps = {
  feature: Feature;
  index: number;
  isLeft: boolean;
};

function FeatureCard({ feature, index, isLeft }: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className={`flex ${isLeft ? "lg:justify-start" : "lg:justify-end"} w-full`}
    >
      <motion.div
        whileHover={{ y: -6 }}
        className="group w-full lg:max-w-[550px] bg-white rounded-2xl p-8 sm:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] border-t-[3px] border-t-transparent hover:border-t-[#00A54F]"
      >
        {/* Icon with background */}
        <div className="mb-5">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#f0fdf4] group-hover:bg-[#dcfce7] transition-colors duration-300">
            <Icon
              className="w-7 h-7 text-[#00A54F] transition-transform duration-300 group-hover:scale-110"
              strokeWidth={1.5}
            />
          </div>
        </div>

        {/* Title */}
        <h3 className="font-['Poppins',sans-serif] font-bold text-[#023018] text-[20px] sm:text-[22px] mb-3 leading-tight">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="font-['Poppins',sans-serif] text-[#5a5a5a] text-[15px] leading-relaxed group-hover:text-[#4a4a4a] transition-colors duration-300">
          {feature.description}
        </p>

        {/* Number indicator */}
        <div className="mt-4">
          <span className="font-['Poppins',sans-serif] text-[#00A54F] text-sm font-semibold">
            {feature.number}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function WhyChinar() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-[100px] px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          {/* Small Label */}
          <p className="font-['Poppins',sans-serif] text-[#00A54F] text-[12px] sm:text-[13px] uppercase tracking-[2px] font-semibold mb-4">
            Why Chinar
          </p>

          {/* Main Heading */}
          <h2 className="font-['Poppins',sans-serif] font-bold text-[#023018] text-[32px] sm:text-[42px] lg:text-[48px] leading-tight mb-6">
            The Strength Behind Every Shipment
          </h2>

          {/* Subtext */}
          <p className="font-['Poppins',sans-serif] text-[#5a5a5a] text-[15px] sm:text-[16px] leading-relaxed max-w-[700px] mx-auto">
            Reliable. Scalable. Technology-driven logistics designed for modern
            businesses.
          </p>
        </motion.div>

        {/* Alternating Feature Cards */}
        <div className="flex flex-col gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.number}
              feature={feature}
              index={index}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
