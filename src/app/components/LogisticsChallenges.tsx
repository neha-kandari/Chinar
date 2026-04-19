import { motion } from "motion/react";
import {
  Clock,
  Truck,
  FileX,
  Route,
  TrendingUp,
  FileText,
  MonitorX
} from "lucide-react";

type Challenge = {
  number: string;
  icon: React.ElementType;
  title: string;
  description: string;
};

const challenges: Challenge[] = [
  {
    number: "01",
    icon: Clock,
    title: "Unreliable Delivery Timelines",
    description: "Inconsistent transport schedules often disrupt supply chains and delay commitments.",
  },
  {
    number: "02",
    icon: Truck,
    title: "Limited Vehicle Availability",
    description: "Capacity shortages during peak seasons affect shipping efficiency.",
  },
  {
    number: "03",
    icon: FileX,
    title: "Manual & Inefficient Processes",
    description: "Lack of automation increases paperwork errors and slows down operations.",
  },
  {
    number: "04",
    icon: Route,
    title: "Infrastructure Bottlenecks",
    description: "Poor road and route planning can increase transit risks and delays.",
  },
  {
    number: "05",
    icon: TrendingUp,
    title: "Rising Transportation Costs",
    description: "Fuel price fluctuations and route inefficiencies impact profitability.",
  },
  {
    number: "06",
    icon: FileText,
    title: "Lack of Standardized Documentation",
    description: "Regional compliance variations complicate freight movement.",
  },
  {
    number: "07",
    icon: MonitorX,
    title: "Limited Technology Integration",
    description: "Without tracking systems, shipment visibility becomes difficult.",
  },
];

type ChallengeCardProps = {
  challenge: Challenge;
  index: number;
};

function ChallengeCard({ challenge, index }: ChallengeCardProps) {
  const Icon = challenge.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-[14px] p-[30px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] border-t-[3px] border-t-transparent hover:border-t-[#00A54F] overflow-hidden"
    >
      {/* Large Faded Number */}
      <div className="absolute top-4 right-4 text-[80px] font-bold text-black opacity-[0.05] leading-none select-none pointer-events-none">
        {challenge.number}
      </div>

      {/* Icon */}
      <div className="relative z-10 mb-4">
        <Icon className="w-7 h-7 text-[#00A54F] transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3 className="relative z-10 font-['Poppins',sans-serif] font-bold text-[#023018] text-[18px] sm:text-[20px] mb-3 leading-tight">
        {challenge.title}
        <span className="block h-[2px] bg-[#00A54F] w-0 group-hover:w-12 transition-all duration-300 mt-2" />
      </h3>

      {/* Description */}
      <p className="relative z-10 font-['Poppins',sans-serif] text-[#5a5a5a] text-[14px] leading-relaxed">
        {challenge.description}
      </p>
    </motion.div>
  );
}

export default function LogisticsChallenges() {
  return (
    <section className="bg-[#f6fffa] py-12 sm:py-16 lg:py-20 px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 lg:mb-12"
        >
          {/* Small Label */}
          <p className="font-['Poppins',sans-serif] text-[#5a5a5a] text-[12px] sm:text-[13px] uppercase tracking-[2px] font-light mb-4">
            Industry Challenges
          </p>

          {/* Main Heading */}
          <h2 className="font-['Poppins',sans-serif] font-bold text-[#023018] text-[32px] sm:text-[38px] lg:text-[48px] leading-tight mb-6">
            Common Logistics Challenges
            <br />
            Businesses Face Today
          </h2>

          {/* Subtext */}
          <p className="font-['Poppins',sans-serif] text-[#5a5a5a] text-[14px] sm:text-[16px] leading-relaxed max-w-[700px] mx-auto">
            Modern supply chains demand reliability, speed and transparency — yet many companies struggle with inefficiencies that impact growth.
          </p>
        </motion.div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {/* First Row - 4 cards */}
          {challenges.slice(0, 4).map((challenge, index) => (
            <ChallengeCard key={challenge.number} challenge={challenge} index={index} />
          ))}

          {/* Second Row - 3 cards centered */}
          <div className="sm:col-span-2 lg:col-span-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] lg:max-w-[calc(75%-15px)] lg:mx-auto">
              {challenges.slice(4).map((challenge, index) => (
                <ChallengeCard key={challenge.number} challenge={challenge} index={index + 4} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}