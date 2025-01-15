import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Alex M.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces',
    rating: 5,
    text: 'Surge has completely transformed my development workflow. The features are incredible!',
  },
  {
    name: 'Sarah K.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces',
    rating: 5,
    text: 'Best executor I\'ve ever used. The support team is amazing and very responsive.',
  },
  {
    name: 'Michael R.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces',
    rating: 5,
    text: 'The features and performance are unmatched. Highly recommend!',
  },
];

export default function SuccessStories() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-48">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
          <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
            <img
              src={testimonials[current].avatar}
              alt={testimonials[current].name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-1 mb-2">
            {[...Array(testimonials[current].rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            ))}
          </div>
          <p className="text-gray-300 mb-2">{testimonials[current].text}</p>
          <p className="text-purple-500 font-semibold">{testimonials[current].name}</p>
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              i === current ? 'bg-purple-500' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
}