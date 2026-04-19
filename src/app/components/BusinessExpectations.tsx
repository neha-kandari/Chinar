import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

type Expectation = {
  title: string;
  description: string;
};

const expectations: Expectation[] = [
  {
    title: "Reliability",
    description:
      "Consistent delivery timelines and dependable service quality.",
  },
  {
    title: "Efficiency",
    description:
      "Streamlined processes ensuring optimized cost and time performance.",
  },
  {
    title: "Flexibility",
    description:
      "Adaptive logistics solutions tailored to dynamic business needs.",
  },
  {
    title: "Transparency",
    description:
      "Real-time tracking and full visibility across shipment lifecycles.",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Strict adherence to transportation laws and documentation standards.",
  },
  {
    title: "Cost-Effectiveness",
    description: "Competitive pricing with operational optimization.",
  },
  {
    title: "Technology Integration",
    description:
      "Advanced tracking, route planning, and digital documentation systems.",
  },
  {
    title: "Safety & Security",
    description: "Careful handling and secure freight movement across routes.",
  },
];

type ExpectationItemProps = {
  expectation: Expectation;
  index: number;
  isLast: boolean;
};

function ExpectationItem({ expectation, index, isLast }: ExpectationItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="relative flex gap-6 group"
    >
      {/* Timeline Column */}
      <div className="flex flex-col items-center flex-shrink-0">
        {/* Number Circle */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
          className="relative z-10"
        >
          <div className="w-12 h-12 rounded-full bg-white border-4 border-[#00A54F] flex items-center justify-center transition-all duration-300 group-hover:bg-[#00A54F] group-hover:scale-110 shadow-md">
            <span className="font-['Poppins',sans-serif] font-bold text-[#00A54F] text-lg group-hover:text-white transition-colors duration-300">
              {index + 1}
            </span>
          </div>
        </motion.div>

        {/* Connecting Line */}
        {!isLast && (
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            className="w-1 bg-gradient-to-b from-[#00A54F] to-[#00A54F]/30 flex-1 min-h-[60px] transition-all duration-300 group-hover:from-[#00A54F] group-hover:to-[#00A54F]"
          />
        )}
      </div>

      {/* Content Card */}
      <motion.div
        whileHover={{ x: 8 }}
        transition={{ duration: 0.3 }}
        className="flex-1 pb-12"
      >
        <div className="bg-white border-2 border-gray-100 rounded-xl p-6 transition-all duration-300 hover:border-[#00A54F] hover:shadow-lg group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-[#F3FBF6]">
          {/* Title with Icon */}
          <div className="flex items-start gap-3 mb-3">
            <CheckCircle2 className="w-6 h-6 text-[#00A54F] flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
            <h3 className="font-['Poppins',sans-serif] font-bold text-[#023018] text-[18px] sm:text-[20px] leading-tight">
              {expectation.title}
            </h3>
          </div>

          {/* Description */}
          <p className="font-['Poppins',sans-serif] text-[#5a5a5a] text-[14px] sm:text-[15px] leading-relaxed pl-9">
            {expectation.description}
          </p>

          {/* Progress Indicator */}
          <div className="mt-4 pl-9">
            <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.4 }}
                className="h-full bg-gradient-to-r from-[#00A54F] to-[#00d866] rounded-full"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function BusinessExpectations() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 sm:py-24 lg:py-[110px] px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Side - Sticky Headline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start"
          >
            {/* Vertical Green Accent Line */}
            <div className="flex gap-6">
              <div className="w-1.5 bg-gradient-to-b from-[#00A54F] to-[#00A54F]/20 flex-shrink-0 rounded-full" />

              <div>
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-block mb-4"
                >
                  <span className="bg-[#00A54F]/10 text-[#00A54F] px-4 py-2 rounded-full font-['Poppins',sans-serif] font-semibold text-sm">
                    Business Standards
                  </span>
                </motion.div>

                {/* Main Heading */}
                <h2 className="font-['Poppins',sans-serif] font-bold text-[#023018] text-[32px] sm:text-[38px] lg:text-[42px] leading-tight mb-6">
                  What Businesses Expect
                  <br />
                  <span className="text-[#00A54F]">From a Modern</span>
                  <br />
                  Logistics Partner
                </h2>

                {/* Supporting Paragraph */}
                <p className="font-['Poppins',sans-serif] text-[#5a5a5a] text-[15px] sm:text-[16px] leading-relaxed mb-6">
                  Reliable, transparent, and technology-driven logistics
                  solutions are no longer optional — they are essential for
                  business growth.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-[#00A54F]/5 rounded-lg p-4 border border-[#00A54F]/20">
                    <div className="font-['Poppins',sans-serif] font-bold text-[#00A54F] text-2xl">
                      8
                    </div>
                    <div className="font-['Poppins',sans-serif] text-[#5a5a5a] text-sm mt-1">
                      Key Standards
                    </div>
                  </div>
                  <div className="bg-[#00A54F]/5 rounded-lg p-4 border border-[#00A54F]/20">
                    <div className="font-['Poppins',sans-serif] font-bold text-[#00A54F] text-2xl">
                      100%
                    </div>
                    <div className="font-['Poppins',sans-serif] text-[#5a5a5a] text-sm mt-1">
                      Commitment
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Expectation Timeline */}
          <div className="lg:col-span-7">
            <div className="space-y-0">
              {expectations.map((expectation, index) => (
                <ExpectationItem
                  key={index}
                  expectation={expectation}
                  index={index}
                  isLast={index === expectations.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}