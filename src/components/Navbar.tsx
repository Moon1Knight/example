import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home');
      if (heroSection) {
        setIsScrolled(window.scrollY > 100  );
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: 'Home', href: '#home' },
    { title: 'Events', href: '#events' },
    { title: 'Achievements', href: '#achievements' },
    { title: 'Testimonials', href: '#testimonials' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full left-0 px-6 z-[100] transition-all duration-300 ${
        isScrolled ? 'bg-white/50 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold bg-gradient-to-r from-[#4195d1] to-[#406ab4] text-transparent bg-clip-text"
          >
            <img
              src="logo.png"
              alt="Global School Academy"
              className="h-16 w-fit object-contain"
            />
          </motion.div>

          {/* Desktop menu - Centered */}
          <div className="hidden md:flex justify-center flex-1 mx-8">
            <div className="flex space-x-8">
              {menuItems.map((item) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  className={`text-transparent bg-gradient-to-r from-[#e32020] via-[#f18721] via-[#00833e] to-[#6cb33f] bg-clip-text transition-all duration-300 text-base ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
                >
                  {item.title}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Admission Button - Desktop */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-6 py-2 bg-gradient-to-r from-[#e32020] via-[#f18721] via-[#00833e] to-[#6cb33f] text-white rounded-lg shadow-md hover:opacity-90 transition-all duration-300 text-base"
          >
            Admission
          </motion.button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            <motion.div
              animate={isOpen ? "open" : "closed"}
              className="flex flex-col space-y-1.5"
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 8 },
                }}
                className="block w-6 h-0.5 bg-gray-600"
              />
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                className="block w-6 h-0.5 bg-gray-600"
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -8 },
                }}
                className="block w-6 h-0.5 bg-gray-600"
              />
            </motion.div>
          </button>

          {/* Mobile menu */}
          <motion.div
            initial={false}
            animate={{
              height: isOpen ? "auto" : 0,
              opacity: isOpen ? 1 : 0,
            }}
            className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm overflow-hidden md:hidden"
          >
            <div className="px-6 py-4 space-y-4">
              {menuItems.map((item) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  whileHover={{ x: 4 }}
                  className="block text-transparent bg-gradient-to-r from-[#e32020] via-[#f18721] via-[#00833e] via-[#6cb33f] via-[#406ab4] to-[#4195d1] bg-clip-text transition-all duration-300 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </motion.a>
              ))}
              <motion.button
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(false)}
                className="w-full text-left px-4 py-2 bg-gradient-to-r from-[#e32020] via-[#f18721] via-[#00833e] to-[#6cb33f] text-white rounded-lg shadow-md hover:opacity-90 transition-all duration-300 text-sm"
              >
                Admission
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
