import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect, useCallback } from "react";

type GalleryImage = {
  url: string;
  title: string;
};

const galleryImages: GalleryImage[] = [
  {
    url: "https://images.unsplash.com/photo-1758292109543-a5c7f0c4cb9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB3YXJlaG91c2UlMjBvcGVyYXRpb25zJTIwaW5kaWF8ZW58MXx8fHwxNzcyNjk4ODY2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Modern Warehouse Operations",
  },
  {
    url: "https://images.unsplash.com/photo-1755728531186-4efe610d8502?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwdHJ1Y2tzJTIwcGFya2VkfGVufDF8fHx8MTc3MjY5ODg3MXww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Fleet Management",
  },
  {
    url: "https://images.unsplash.com/photo-1725781535657-29d825bc7824?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMGxvYWRpbmclMjBkb2NrJTIwd29ya2Vyc3xlbnwxfHx8fDE3NzI2OTg4Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Cargo Loading Operations",
  },
  {
    url: "https://images.unsplash.com/photo-1635774152029-17bf0a3e1cb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpdmVyeSUyMHRydWNrJTIwaGlnaHdheSUyMGluZGlhfGVufDF8fHx8MTc3MjY5ODg2OHww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "On-Time Delivery",
  },
  {
    url: "https://images.unsplash.com/photo-1740914994657-f1cdffdc418e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBzdG9yYWdlJTIwc2hlbHZlcyUyMGludmVudG9yeXxlbnwxfHx8fDE3NzI2OTg4Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Inventory Management",
  },
  {
    url: "https://images.unsplash.com/photo-1611224097891-83220d09271a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGlwcGluZyUyMGNvbnRhaW5lcnMlMjB0ZXJtaW5hbHxlbnwxfHx8fDE3NzI2OTg4Njl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Container Terminal",
  },
];

export default function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 640px)": { active: false },
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
    <section className="bg-gradient-to-b from-[#f8f9fa] to-white py-16 sm:py-20 lg:py-24 px-4 overflow-hidden">
      <div className="max-w-[1300px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          {/* Small Tag */}
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 bg-[#00A54F] rounded-full" />
            <span className="font-['Poppins',sans-serif] text-[#00A54F] text-[12px] sm:text-[13px] uppercase tracking-wider font-semibold">
              OUR GALLERY
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-['Poppins',sans-serif] font-bold text-[#023018] text-[32px] sm:text-[42px] lg:text-[52px] leading-tight mb-6">
            Our Operations in Action
          </h2>

          {/* Description */}
          <p className="font-['Poppins',sans-serif] text-[#5a5a5a] text-[15px] sm:text-[17px] leading-relaxed max-w-[800px] mx-auto">
            Explore our state-of-the-art facilities, modern fleet, and dedicated team delivering excellence across India
          </p>
        </motion.div>

        {/* Gallery Grid / Slider */}
        <div className="embla" ref={emblaRef}>
          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {galleryImages.map((image, index) => (
              <div
                key={image.url}
                className={`flex-[0_0_85%] min-w-0 sm:flex-none ${
                  index === 0 || index === 3
                    ? "sm:col-span-2 sm:row-span-2"
                    : ""
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-2xl w-full"
                >
                  <div
                    className={`relative overflow-hidden w-full ${
                      index === 0 || index === 3
                        ? "h-[300px] sm:h-[450px]"
                        : "h-[300px] sm:h-[220px]"
                    }`}
                  >
                    <ImageWithFallback
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Subtle Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                        <h4 className="font-['Poppins',sans-serif] text-white text-[14px] sm:text-[16px] font-semibold">
                          {image.title}
                        </h4>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots (Mobile Only) */}
        <div className="flex sm:hidden justify-center gap-2 mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                selectedIndex === index ? "w-8 bg-[#00A54F]" : "w-1.5 bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
