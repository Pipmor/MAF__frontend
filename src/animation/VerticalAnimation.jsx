import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const VerticalAnimation = ({ className }) => {
  const controlsLine = useAnimation();
  const lineRef = useRef(null);
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animationStarted) {
        setAnimationStarted(true);
      }
    });

    observer.observe(lineRef.current);

    return () => {
      observer.disconnect();
    };
  }, [animationStarted]);

  useEffect(() => {
    if (animationStarted) {
      animateLine();
    }
  }, [animationStarted]);

  const animateLine = async () => {
      await controlsLine.start({ height: "32%" });
      await controlsLine.start({ height: "64%" });
  };
  return (
    <motion.div
      ref={lineRef}
      initial={{ width: 0 }}
      animate={controlsLine}
      transition={{ duration: 1.4, delay: 0.2 }}
      className={className}
    ></motion.div>
  );
};

export default VerticalAnimation;
