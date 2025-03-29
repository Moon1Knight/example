import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface Event {
  title: string;
  description: string;
  image: string;
}

const events: Event[] = [
  {
    title: "Children's Day",
    description: "A joyous celebration of childhood filled with fun activities, games, and performances by our young stars.",
    image: "/Pics/group-of-happy-indian-children.jpg"
  },
  {
    title: "Yellow Day",
    description: "A vibrant celebration where students and teachers come together dressed in yellow to spread happiness and positivity.",
    image: "/Pics/Yellow-day.jpeg"
  },
  {
    title: "Teachers' Day",
    description: "A special day dedicated to honoring our educators and expressing gratitude for their invaluable contribution to shaping young minds.",
    image: "/Pics/gettyimages-1343473005-612x612.jpg"
  }
];

const EventCard = ({ event, index }: { event: Event; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="relative rounded-xl shadow-lg overflow-hidden group h-64 transform transition-transform duration-300 hover:scale-110 cursor-pointer"
        onClick={() => setIsExpanded(true)}
      >
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-full object-cover"
      />
      <motion.div 
        initial="hidden"
        whileHover="visible"
        animate="hidden"
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.3,
              ease: "easeOut",
              staggerChildren: 0.1
            }
          },
          hidden: {
            opacity: 0,
            y: '100%',
            transition: {
              duration: 0.2,
              ease: "easeIn"
            }
          }
        }}
        className="absolute inset-0 bg-black/70 flex flex-col justify-center p-6 text-white"
      >
        <motion.h3 
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 }
          }}
          className="text-2xl font-semibold mb-3"
        >
          {event.title}
        </motion.h3>
        <motion.p
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 }
          }}
          className="text-gray-200"
        >
          {event.description}
        </motion.p>
      </motion.div>
    </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <motion.div
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8"
                >
                  <motion.h3
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-3xl font-bold text-white mb-4"
                  >
                    {event.title}
                  </motion.h3>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-lg text-gray-200"
                  >
                    {event.description}
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const EventsSection = () => {
  return (
    <section id="events" className="py-20 relative bg-gradient-to-br from-[#4195d1]/10 via-white to-[#406ab4]/10 backdrop-filter">
      <div className="px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-red-500 via-orange-500 via-green-500 via-blue-500 to-blue-600 text-transparent bg-clip-text text-gray-900 mb-4">
             Events & Activities
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the vibrant culture and traditions that make our school community special.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={event.title} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;