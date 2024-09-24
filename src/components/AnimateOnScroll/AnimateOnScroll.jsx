import React from 'react';
import { useInView } from 'react-intersection-observer';

const AnimateOnScroll = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: `translateY(${inView ? 0 : 20}px)`,
        transition: 'opacity 0.5s, transform 0.5s',
      }}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;