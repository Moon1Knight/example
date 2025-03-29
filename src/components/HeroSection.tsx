import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import GlanceSection from './GlanceSection';

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + 3) % 3);
  };

  const handleNextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % 3);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-[#4195d1]/10 via-white to-[#406ab4]/10 overflow-hidden">
      {/* <div className="mt-16 relative z-20 bg-white/80 backdrop-blur-sm">
        <AnnouncementBar />
      </div> */}
      
      <div className="container mx-auto relative z-10 w-full h-screen flex items-center">
        <div className="text-center w-full h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex-grow flex items-center justify-center w-full h-full"
          >
            <div className="relative w-full h-full overflow-hidden group">
              <button
                onClick={handlePrevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-[#4195d1]/80 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                onClick={handleNextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-[#4195d1]/80 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
              <AnimatePresence >
                {[
                  {
                    quote: "Education is not preparation for life; education is life itself.",
                    image: "/stock_pics/pexels-emily-ranquist-493228-1205651.jpg"
                  },
                  {
                    quote: "The beautiful thing about learning is that no one can take it away from you.",
                    image: "/stock_pics/pexels-goumbik-296301.jpg"
                  },
                  {
                    quote: "Knowledge is power. Information is liberating. Education is the premise of progress.",
                    image: "/stock_pics/pexels-rebecca-zaal-252062-764681.jpg"
                  }
                ].map((slide, index) => (
                  currentIndex === index && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 300 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -300 }}
                      transition={{ 
                        duration: 0.5,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0"
                    >
                      <img
                        src={slide.image}
                        alt={`Educational slide ${index + 1}`}
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t  to-transparent flex items-center justify-center p-8">
                        <p className="text-4xl md:text-5xl font-medium text-center text-white max-w-4xl mx-auto leading-relaxed">
                          {slide.quote}
                        </p>
                      </div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
          
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>

      <GlanceSection />
    </section>
  );
};

export default HeroSection;