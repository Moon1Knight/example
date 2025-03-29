import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const stats = [
  { label: 'Students Enrolled', value: 2500, suffix: '+', description: 'From preschool to high school' },
  { label: 'Faculty Members', value: 300, suffix: '+', description: 'Experienced educators' },
  { label: 'Student-Teacher Ratio', value: 8, suffix: ':1', description: 'Personalized attention' },
  { label: 'Campus Area', value: 16, suffix: ' acres', description: 'Modern facilities' },
];

const StatsSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, index) => {
        let start = 0;
        const end = stat.value;
        const duration = 2000;
        const frameDuration = 1000 / 60;
        const totalFrames = Math.round(duration / frameDuration);
        const increment = end / totalFrames;

        let frame = 0;
        const counter = setInterval(() => {
          frame++;
          const current = Math.min(start + frame * increment, end);
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(current);
            return newCounts;
          });

          if (frame === totalFrames) {
            clearInterval(counter);
          }
        }, frameDuration);

        return () => clearInterval(counter);
      });
    }
  }, [isInView]);

  return (
    <div className="bg-gray-50 py-20">
      <div className="px-6">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                className="text-5xl font-bold bg-gradient-to-r  from-red-500 via-orange-500 to-green-500 text-transparent bg-clip-text mb-4"

                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                {counts[index]}{stat.suffix}
              </motion.div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">{stat.label}</h3>
              <p className="text-gray-600 text-lg">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default StatsSection;