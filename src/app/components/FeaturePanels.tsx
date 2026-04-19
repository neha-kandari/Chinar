import { motion } from "motion/react";
import { Truck, Radio, Clock, FileCheck, Handshake, DollarSign } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect, useCallback } from "react";

type Feature = {
  number: string;
  icon: React.ElementType;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    number: "01",
    icon: Truck,
    title: "Modern & Versatile Fleet",
    description:
      "A well-maintained transport fleet capable of handling diverse cargo requirements.",
  },
  {
    number: "02",
    icon: Radio,
    title: "Real-Time GPS Tracking",
    description:
      "Complete shipment visibility through advanced tracking technology.",
  },
  {
    number: "03",
    icon: Clock,
    title: "On-Time Delivery Commitment",
    description:
      "Optimized routing and execution to ensure dependable timelines.",
  },
  {
    number: "04",
    icon: FileCheck,
    title: "Regulatory Compliance",
    description: "Standardized documentation aligned with transportation laws.",
  },
  {
    number: "05",
    icon: Handshake,
    title: "Strong Network Partnerships",
    description:
      "Strategic collaborations across major logistics hubs.",
  },
  {
    number: "06",
    icon: DollarSign,
    title: "Transparent Pricing Model",
    description:
      "Cost-efficient freight solutions with no hidden charges.",
  },
];

type FeaturePanelProps = {
  feature: Feature;
  index: number;
};

function FeaturePanel({ feature, index }: FeaturePanelProps) {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group relative bg-white rounded-2xl p-8 shadow-[0_8px_25px_rgba(0,0,0,0.05)] border border-[#F1F1F1] transition-all duration-[350ms] ease-in-out hover:shadow-[0_15px_50px_rgba(0,0,0,0.12)] hover:bg-[#F3FBF6] overflow-hidden"
    >
      {/* Large Background Number */}
      <div className="absolute top-4 right-4 font-['Poppins',sans-serif] text-[120px] font-bold text-[#00A54F] opacity-[0.03] leading-none pointer-events-none">
        {feature.number}
      </div>

      {/* Top Section: Small Number + Icon */}
      <div className="flex items-center gap-3 mb-5 relative z-10">
        {/* Small Number */}
        <span className="font-['Poppins',sans-serif] text-[#00A54F] text-sm font-semibold opacity-40">
          {feature.number}
        </span>

        {/* Icon with Background */}
        <div className="w-12 h-12 rounded-full bg-[#F3FBF6] flex items-center justify-center transition-all duration-[350ms] group-hover:bg-[#00A54F]">
          <Icon
            className="w-6 h-6 text-[#00A54F] transition-all duration-[350ms] group-hover:text-white"
            strokeWidth={1.5}
          />
        </div>
      </div>

      {/* Title */}
      <h3 className="font-['Poppins',sans-serif] font-bold text-[#023018] text-[18px] sm:text-[20px] leading-tight mb-3 transition-colors duration-[350ms] group-hover:text-[#011e10] relative z-10">
        {feature.title}
      </h3>

      {/* Description - Always Visible */}
      <p className="font-['Poppins',sans-serif] text-[#5a5a5a] text-[14px] leading-relaxed mb-5 line-clamp-2 relative z-10">
        {feature.description}
      </p>

      {/* Green Accent Line */}
      <div className="h-[3px] bg-[#00A54F] w-10 transition-all duration-[350ms] group-hover:w-full relative z-10" />
    </motion.div>
  );
}

export default function FeaturePanels() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { active: false },
    },
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-[110px] px-4 overflow-hidden">
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
            Built for Modern Logistics Excellence
          </h2>

          {/* Subtext */}
          <p className="font-['Poppins',sans-serif] text-[#5a5a5a] text-[15px] sm:text-[16px] leading-relaxed max-w-[700px] mx-auto">
            Technology-driven operations backed by experience and reliability.
          </p>
        </motion.div>

        {/* Feature Panels Grid / Slider */}
        <div className="embla" ref={emblaRef}>
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-[30px] md:gap-[30px]">
            {features.map((feature, index) => (
              <div key={index} className="flex-[0_0_85%] min-w-0 md:flex-none">
                <FeaturePanel feature={feature} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots (Mobile Only) */}
        <div className="flex md:hidden justify-center gap-2 mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${selectedIndex === index ? "w-8 bg-[#00A54F]" : "w-1.5 bg-gray-200"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}