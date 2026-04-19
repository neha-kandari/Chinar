import { motion } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "What types of logistics services do you offer?",
    answer: "We offer comprehensive logistics solutions including Part Load Enquiry, Full Truck Load services, warehousing, distribution, and booking agency services. Our fleet can handle cargo of all sizes, from small parcels to full truckloads.",
  },
  {
    id: 2,
    question: "How can I track my shipment?",
    answer: "We provide real-time tracking for all shipments through our online portal. Once your shipment is dispatched, you'll receive a tracking number that allows you to monitor your cargo's location and estimated delivery time 24/7.",
  },
  {
    id: 3,
    question: "What areas do you service?",
    answer: "We provide nationwide coverage across India with our extensive distribution network. We also offer international shipping solutions through our global partnerships, ensuring your cargo reaches its destination safely and on time.",
  },
  {
    id: 4,
    question: "How do you ensure the safety of goods during transit?",
    answer: "We employ multiple safety measures including GPS-enabled tracking, trained drivers, secure packaging protocols, comprehensive insurance coverage, and regular vehicle maintenance. Our modern fleet is equipped with safety features to protect your cargo throughout the journey.",
  },
  {
    id: 5,
    question: "What are your payment terms?",
    answer: "We offer flexible payment options including advance payment, credit terms for registered businesses, and cash on delivery for certain services. Payment can be made through bank transfer, UPI, credit/debit cards, or digital wallets.",
  },
  {
    id: 6,
    question: "Do you provide warehousing solutions?",
    answer: "Yes, we offer state-of-the-art warehousing facilities with climate control, 24/7 security, inventory management systems, and flexible storage options. Our strategically located warehouses help optimize your supply chain efficiency.",
  },
  {
    id: 7,
    question: "What is your average delivery time?",
    answer: "Delivery times vary based on distance and service type. Local deliveries typically take 1-2 days, regional shipments 3-5 days, and nationwide deliveries 5-7 days. We also offer express services for urgent shipments with same-day or next-day delivery options.",
  },
  {
    id: 8,
    question: "How can I get a quote for my shipment?",
    answer: "You can request a quote through our website by filling out the enquiry form, calling our customer service team, or using our mobile app. We'll need details about your cargo (weight, dimensions, destination) to provide an accurate quote within 24 hours.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-12 sm:py-14 lg:py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-['Poppins',sans-serif] text-[28px] sm:text-[36px] lg:text-[40px] font-extrabold text-[#1a1a1a] mb-3">
              Frequently Asked{" "}
              <span className="text-[#00A54F]">Questions</span>
            </h2>
            <p className="font-['Poppins',sans-serif] text-[#5a5a5a] text-[14px] sm:text-[15px] leading-relaxed max-w-[600px] mx-auto">
              Find answers to common questions about our logistics services
            </p>
          </motion.div>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 max-w-[1100px] mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-gradient-to-br from-white to-[#f8fdf9] border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-[#00A54F]/30 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-start justify-between gap-4 text-left hover:bg-[#00A54F]/5 transition-all duration-300"
              >
                <h3 className="font-['Poppins',sans-serif] text-[#1a1a1a] text-[14px] sm:text-[15px] lg:text-[16px] font-semibold leading-snug">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 mt-0.5">
                  {openId === faq.id ? (
                    <Minus className="w-5 h-5 text-[#00A54F]" />
                  ) : (
                    <Plus className="w-5 h-5 text-[#00A54F]" />
                  )}
                </div>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openId === faq.id ? "auto" : 0,
                  opacity: openId === faq.id ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-5 sm:px-6 pb-4 sm:pb-5">
                  <p className="font-['Poppins',sans-serif] text-[#5a5a5a] text-[13px] sm:text-[14px] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-8 sm:mt-10"
        >
          <p className="font-['Poppins',sans-serif] text-[#3a3a3a] text-[14px] sm:text-[15px] mb-4">
            Still have questions? We're here to help!
          </p>
          <a 
            href="https://wa.me/919811323695?text=Hello%20Chinar%20Roadlines,%20I%20have%20a%20question%20regarding%20your%20logistics%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="font-['Poppins',sans-serif] bg-[#00A54F] text-white px-7 py-3 rounded-full text-[13px] sm:text-[14px] font-semibold hover:bg-[#008f43] transition-all duration-300 shadow-lg shadow-[#00A54F]/30 hover:shadow-xl hover:shadow-[#00A54F]/40 hover:-translate-y-0.5 inline-block"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  );
}
