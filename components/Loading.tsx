import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

const Loading = () => {
  return (
    <AnimatePresence mode='wait'>
      <div className='h-auto w-auto flex gap-3'>
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.span
            animate={{
              y: [3, -3],
            }}
            transition={{
              duration: 0.5,
              type: 'spring',
              stiffness: 200,
              damping: 20,
              repeat: Infinity,
              repeatType: 'loop',
              delay: i / 10,
              repeatDelay: i / 10,
            }}
            key={i}
            className='h-3 w-3 rounded-full bg-white shadow-md shadow-black/50'
          />
        ))}
      </div>
    </AnimatePresence>
  );
};

export default Loading;
