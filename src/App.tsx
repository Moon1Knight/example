import { motion } from 'framer-motion';
import { useState, useEffect, lazy, Suspense } from 'react';
import LoadingAnimation from './components/LoadingAnimation';

const Navbar = lazy(() => import('./components/Navbar'));
const HeroSection = lazy(() => import('./components/HeroSection'));
const EventsSection = lazy(() => import('./components/EventsSection'));
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection'));
const AboutSection = lazy(() => import('./components/AboutSection'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <Suspense fallback={<LoadingAnimation />}>
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
      className="min-h-screen w-full bg-white relative overflow-y-auto scrollbar-hide flex justify-center"
      style={{
        backgroundImage: 'url("/src/assets/Books.svg")',
        backgroundRepeat: 'repeat',
        backgroundSize: '400px',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-full w-full">
        <Navbar />
        <main>
          <HeroSection />
          {/* <GlanceSection /> */}
          <EventsSection />
          <AboutSection />
          <TestimonialsSection />
        </main>
        <Footer />
      </div>
    </motion.div>
        </Suspense>
      )}
    </>
  );
}

export default App;
