<section className="py-24 bg-white" style={{ paddingLeft: '139px', paddingRight: '139px' }}>
        <div className="grid grid-cols-12 gap-16">
          {/* Left Side - Sticky Heading */}
          <div className="col-span-4">
            <div className="sticky top-32">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-5xl font-bold text-black mb-6 leading-tight">
                  Our Story
                </h2>
                <div className="w-20 h-1 bg-[#9747FF] mb-8"></div>
                <p className="text-base text-gray-600 leading-relaxed">
                  The journey of building India's collaborative design ecosystem, 
                  from inception to becoming a thriving hub for innovation.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right Side - Stacking Cards */}
          <div className="col-span-8">
            {/* Card 1 - The Beginning */}
            <div className="sticky top-32 mb-8" style={{ zIndex: 10 }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="group"
              >
                <div className="flex gap-6">
                  {/* Icon/Number */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#9747FF] to-[#7c3ad4] rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <span className="text-white font-bold text-2xl">01</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white border-2 border-gray-200 p-8 hover:border-[#9747FF] hover:shadow-xl transition-all duration-500">
                    <h3 className="text-2xl font-bold text-black mb-4">
                      The Beginning
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      The idea of Knowledge Center started with a vision to build a platform for 
                      collaboration in the design industry. It began as a simple concept to connect 
                      architects, designers, and brands under one roof.
                    </p>
                    <button className="inline-flex items-center gap-2 text-[#9747FF] font-semibold hover:gap-4 transition-all duration-300">
                      Read more
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Card 2 - Building the Space */}
            <div className="sticky top-40 mb-8" style={{ zIndex: 20 }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group"
              >
                <div className="flex gap-6">
                  {/* Icon/Number */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <span className="text-white font-bold text-2xl">02</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white border-2 border-gray-200 p-8 hover:border-[#9747FF] hover:shadow-xl transition-all duration-500">
                    <h3 className="text-2xl font-bold text-black mb-4">
                      Building the Space
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      A dedicated workspace was created where architects, consultants and brands 
                      could connect. The physical space became the foundation for meaningful 
                      collaborations and knowledge exchange.
                    </p>
                    <button className="inline-flex items-center gap-2 text-[#9747FF] font-semibold hover:gap-4 transition-all duration-300">
                      Read more
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Card 3 - Growing the Community */}
            <div className="sticky top-48 mb-8" style={{ zIndex: 30 }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group"
              >
                <div className="flex gap-6">
                  {/* Icon/Number */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-500 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <span className="text-white font-bold text-2xl">03</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white border-2 border-gray-200 p-8 hover:border-[#9747FF] hover:shadow-xl transition-all duration-500">
                    <h3 className="text-2xl font-bold text-black mb-4">
                      Growing the Community
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Workshops, conferences and events brought professionals together. The community 
                      expanded beyond borders, fostering relationships that drove innovation and 
                      creative excellence.
                    </p>
                    <button className="inline-flex items-center gap-2 text-[#9747FF] font-semibold hover:gap-4 transition-all duration-300">
                      Read more
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Card 4 - The Ecosystem */}
            <div className="sticky top-48 mb-8" style={{ zIndex: 40 }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="group"
              >
                <div className="flex gap-6">
                  {/* Icon/Number */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#9747FF] to-[#7c3ad4] rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <span className="text-white font-bold text-2xl">04</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white border-2 border-gray-200 p-8 hover:border-[#9747FF] hover:shadow-xl transition-all duration-500">
                    <h3 className="text-2xl font-bold text-black mb-4">
                      The Ecosystem
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Knowledge Center is now a hub for learning, networking and innovation. 
                      With 100+ brands, 50+ consultants, and 1000+ professionals, we've built 
                      India's premier architectural ecosystem.
                    </p>
                    <button className="inline-flex items-center gap-2 text-[#9747FF] font-semibold hover:gap-4 transition-all duration-300">
                      Read more
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>