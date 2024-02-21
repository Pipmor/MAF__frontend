import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";

const LineAnimation = ({ className }) => {
  const controlsLine = useAnimation();
  const lineRef = useRef(null);
  const [animationStarted, setAnimationStarted] = useState(false);
  const isMobile = useMediaQuery("(max-width: 800px)");

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
      await controlsLine.start({ width: "32%" });
      await controlsLine.start({ width: "64%" });
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

export default LineAnimation;
