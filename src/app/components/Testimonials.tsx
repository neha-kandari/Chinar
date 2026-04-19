import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    image: "https://images.unsplash.com/photo-1659355894117-0ae6f8f28d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjY5OTI2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    text: "Reliable and fast! Best logistics partner we've ever had.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    image: "https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBleGVjdXRpdmUlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzI2MTg0NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    text: "Seamless delivery every time. Real-time tracking is a game changer.",
  },
  {
    id: 3,
    name: "Amit Patel",
    image: "https://images.unsplash.com/photo-1543132220-4bf3de6e10ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwY2VvJTIwcG9ydHJhaXQlMjBidXNpbmVzc21hbnxlbnwxfHx8fDE3NzI2OTkyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    text: "Highly professional team. Our goods always arrive in perfect condition.",
  },
  {
    id: 4,
    name: "Sarah Chen",
    image: "https://images.unsplash.com/photo-1665224752136-4dbe2dfc8195?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBtYW5hZ2VyJTIwcG9ydHJhaXQlMjBhc2lhbnxlbnwxfHx8fDE3NzI2OTkyNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    text: "Efficient and cost-effective. Truly stand out in the logistics industry.",
  },
  {
    id: 5,
    name: "Meera Reddy",
    image: "https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsJTIwaGVhZHNob3R8ZW58MXx8fHwxNzcyNjA5NzUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    text: "Transparent pricing and great customer support. Highly recommended!",
  },
  {
    id: 6,
    name: "Vikram Singh",
    image: "https://images.unsplash.com/photo-1769636929245-427d4e365716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRyZXByZW5ldXIlMjBwb3J0cmFpdCUyMGNvbmZpZGVudHxlbnwxfHx8fDE3NzI2NzcyODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    text: "Dependable and honest partners. They've helped our business grow.",
  },
];

export default function Testimonials() {
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-20 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 bg-[#00A54F] rounded-full" />
              <span className="font-['Poppins',sans-serif] text-[#00A54F] text-[12px] sm:text-[13px] uppercase tracking-wider font-semibold">
                TESTIMONIALS
              </span>
            </div>
            <h2 className="font-['Poppins',sans-serif] text-[32px] sm:text-[42px] lg:text-[48px] font-bold text-[#023018] mb-4">
              Trusted by Hundreds
            </h2>
            <p className="font-['Poppins',sans-serif] text-[#5a5a5a] text-[15px] sm:text-[17px] leading-relaxed max-w-[700px] mx-auto">
              Real feedback from businesses that rely on our logistics every day.
            </p>
          </motion.div>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative flex overflow-hidden py-10">
          <motion.div
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
            className="flex gap-6 whitespace-nowrap"
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="w-[350px] sm:w-[400px] bg-white rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col gap-5 flex-shrink-0"
              >
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-[#00A54F]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Text */}
                <p className="font-['Poppins',sans-serif] text-[#3a3a3a] text-[15px] sm:text-[16px] leading-relaxed whitespace-normal italic">
                  "{testimonial.text}"
                </p>

                {/* User Info */}
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#00A54F]/10">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-['Poppins',sans-serif] text-[#1a1a1a] text-[15px] font-bold">
                      {testimonial.name}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
