import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";

const OrderCardsAnimation = ({ children, index }) => {
  const controls = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        controls.start({ opacity: 1 });
        observer.disconnect();
      }
    });

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [controls]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: index, delay: index }}
    >
      {children}
    </motion.div>
  );
};

export default OrderCardsAnimation;
