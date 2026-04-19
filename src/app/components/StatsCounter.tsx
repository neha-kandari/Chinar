import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function StatsCounter() {
  const [count, setCount] = useState(100);

  useEffect(() => {
    // Increment counter every 2 seconds
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-6 sm:py-8 bg-gradient-to-b from-white to-gray-50">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00a54f] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Single Counter - Centered */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="mb-2">
              <motion.span 
                key={count}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-['Poppins',sans-serif] font-bold text-4xl sm:text-5xl lg:text-6xl text-[#00a54f]"
              >
                {count.toLocaleString()}
              </motion.span>
              <span className="font-['Poppins',sans-serif] font-bold text-4xl sm:text-5xl lg:text-6xl text-[#00a54f]">+</span>
            </div>
            
            <h3 className="font-['Poppins',sans-serif] font-semibold text-[#023018] text-lg sm:text-xl lg:text-2xl">
              Happy Clients
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}