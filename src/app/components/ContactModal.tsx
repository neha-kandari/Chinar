import { X, Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

interface ContactModalProps {
  open?: boolean;
  isOpen?: boolean;
  onClose: () => void;
}

export default function ContactModal({ open, isOpen, onClose }: ContactModalProps) {
  const modalOpen = open ?? isOpen ?? false;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Construct WhatsApp message
    const message = `*Contact Enquiry - Chinar Roadlines*
    
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Company:* ${formData.company}
*Service:* ${formData.serviceType}

*Message:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/919811323695?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    setSubmitStatus("success");
    setIsSubmitting(false);
    
    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        serviceType: "",
        message: ""
      });
      setSubmitStatus("idle");
      onClose();
    }, 2000);
  };

  if (!modalOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div 
        className="absolute inset-0" 
        onClick={onClose}
        aria-label="Close modal"
      />
      
      <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-[#00a54f] text-white px-6 py-5 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold font-['Inter',sans-serif]">Get In Touch</h2>
            <p className="text-sm text-white/90 mt-1">We'll get back to you within 24 hours</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          <div className="grid md:grid-cols-5 gap-0">
            {/* Contact Information Section */}
            <div className="md:col-span-2 bg-gradient-to-br from-gray-50 to-gray-100 p-6 lg:p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6 font-['Inter',sans-serif]">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#00a54f] p-3 rounded-full text-white flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm mb-1">Phone</p>
                    <p className="text-gray-600 text-sm">+91 98113 23695</p>
                    <p className="text-gray-600 text-sm">+91 98992 30165</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#00a54f] p-3 rounded-full text-white flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm mb-1">Email</p>
                    <p className="text-gray-600 text-sm">chinarroadlinesdelhi@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#00a54f] p-3 rounded-full text-white flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm mb-1">Address</p>
                    <p className="text-gray-600 text-sm">
                      BG-338, BG-339 Sanjay Gandhi<br />
                      Tpt Nagar, Delhi
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-300">
                <p className="text-sm text-gray-600 font-['Inter',sans-serif]">
                  <strong className="text-gray-800">Business Hours:</strong><br />
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* Form Section */}
            <div className="md:col-span-3 p-6 lg:p-8">
              {submitStatus === "success" ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="bg-green-100 p-4 rounded-full mb-4">
                    <Send className="w-12 h-12 text-[#00a54f]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
                  <p className="text-gray-600 text-center">
                    Your message has been sent successfully. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a54f] focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a54f] focus:border-transparent outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a54f] focus:border-transparent outline-none transition-all"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a54f] focus:border-transparent outline-none transition-all"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-semibold text-gray-700 mb-2">
                      Service Interested In <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a54f] focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="part-load">Part Load Enquiry</option>
                      <option value="full-truck">Full Truck Load</option>
                      <option value="booking-agency">Booking Agency</option>
                      <option value="warehousing">Warehousing Solutions</option>
                      <option value="express-delivery">Express Delivery</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a54f] focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us about your logistics needs..."
                    />
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={onClose}
                      className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 px-6 py-3 bg-[#00a54f] text-white rounded-lg hover:bg-[#008f44] transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}