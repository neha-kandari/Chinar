import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const stories = [
  {
    id: "01",
    color: "from-[#00A54F] to-[#00d866]",
    border: "hover:border-[#00A54F]",
    year: "1978",
    title: "A Journey Begins",
    body: "Every great journey begins with a single step. Ours began in 1978, when Mr. Darshan Singh Batra, with determination in his heart and a vision for the future, started Chinar Roadlines Regd. Delhi with just one truck. In an era where logistics was driven more by relationships than technology, he built his foundation on trust, commitment, and integrity.",
    zIndex: 10,
    top: "top-32",
  },
  {
    id: "02",
    color: "from-blue-500 to-blue-600",
    border: "hover:border-blue-500",
    year: "The Promise",
    title: "More Than a Vehicle",
    body: "That one truck wasn't just a vehicle, it was the beginning of a promise — to deliver not just goods, but reliability. Through years of hard work, long journeys, and unwavering dedication, the company steadily grew. Every mile covered was a step toward building a reputation that clients could depend on.",
    zIndex: 20,
    top: "top-40",
  },
  {
    id: "03",
    color: "from-orange-500 to-orange-600",
    border: "hover:border-orange-500",
    year: "The Legacy",
    title: "Carried Forward",
    body: "As time moved forward, the legacy was proudly carried forward by his sons, Mr. Gurbaksh Singh Batra and Mr. Arvinder Singh Batra. With deep respect for their father’s values and a vision to adapt to a changing world, they transformed the business into a modern logistics enterprise—while preserving its core principles.",
    zIndex: 30,
    top: "top-48",
  },
  {
    id: "04",
    color: "from-[#00A54F] to-[#00d866]",
    border: "hover:border-[#00A54F]",
    year: "Today",
    title: "A Trusted Partner",
    body: "Under their leadership, Chinar Roadlines expanded its operations, strengthened its network, and embraced efficiency. What started as a single-truck operation has evolved into a trusted logistics partner, serving businesses with the same dedication and personal commitment that have defined its journey since 1978. ",
    zIndex: 40,
    top: "top-48",
  },
];

export default function AboutUs() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white px-4 sm:px-6 lg:px-[80px] xl:px-[139px]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">

        {/* Left Side - Sticky Heading */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-['Poppins',sans-serif] text-sm font-semibold text-[#00A54F] uppercase tracking-widest mb-3">
                Our Story
              </p>
              <h2 className="font-['Poppins',sans-serif] text-[32px] sm:text-[40px] lg:text-[46px] font-bold text-[#023018] mb-6 leading-tight">
                Built on Trust,{" "}
                <span className="text-[#00A54F]">Driven by Legacy</span>
              </h2>
              <div className="w-20 h-1 bg-[#00A54F] mb-8"></div>
              <p className="font-['Poppins',sans-serif] text-base text-gray-600 leading-relaxed">
                From a single truck in 1978 to a pan-India logistics partner — a journey defined by grit,
                family values, and an unwavering promise to deliver.
              </p>
              <div className="mt-10 inline-flex items-center gap-3 bg-[#023018] text-white px-5 py-3 rounded-lg">
                <span className="text-[#00A54F] font-bold text-2xl">47</span>
                <span className="font-['Poppins',sans-serif] text-sm leading-tight">
                  Years of<br />Excellence
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Side - Stacking Cards */}
        <div className="lg:col-span-8">

          {stories.map((s, i) => (
            <div
              key={s.id}
              className={`sticky ${s.top} mb-8`}
              style={{ zIndex: s.zIndex }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group"
              >
                <div className="flex gap-4 sm:gap-6">
                  {/* Number badge */}
                  <div className="flex-shrink-0">
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${s.color} rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                    >
                      <span className="text-white font-bold text-lg sm:text-2xl">{s.id}</span>
                    </div>
                  </div>

                  {/* Card body */}
                  <div
                    className={`flex-1 bg-white border-2 border-gray-200 p-6 sm:p-8 ${s.border} hover:shadow-xl transition-all duration-500 rounded-lg shadow-sm`}
                  >
                    <span className="inline-block font-['Poppins',sans-serif] text-xs font-semibold text-[#00A54F] uppercase tracking-widest mb-2">
                      {s.year}
                    </span>
                    <h3 className="font-['Poppins',sans-serif] text-xl sm:text-2xl font-bold text-[#023018] mb-4">
                      {s.title}
                    </h3>
                    <p className="font-['Poppins',sans-serif] text-gray-600 leading-relaxed text-sm sm:text-base">
                      {s.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}

          {/* Our Promise Banner — NOT sticky, scrolls normally after the last card */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="mt-4 rounded-xl bg-gradient-to-br from-[#023018] to-[#01491e] p-8 sm:p-10 text-white relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#00A54F] opacity-10 rounded-full" />
            <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-[#00A54F] opacity-10 rounded-full" />

            <p className="font-['Poppins',sans-serif] text-[#00d866] text-sm font-semibold uppercase tracking-widest mb-3">
              Our Promise
            </p>
            <h3 className="font-['Poppins',sans-serif] text-2xl sm:text-3xl font-bold mb-4 leading-snug">
              From one generation to the next,<br className="hidden sm:block" /> our mission remains unchanged.
            </h3>
            <p className="font-['Poppins',sans-serif] text-gray-300 text-base leading-relaxed max-w-xl">
              To move your goods with care, reliability, and the trust that has defined us since{" "}
              <span className="text-[#00d866] font-semibold">1978</span>.
            </p>
          </motion.div> */}

        </div>
      </div>
    </section>
  );
}