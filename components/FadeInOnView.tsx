"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Props = React.PropsWithChildren<{ delay?: number }>;

const FadeInOnView: React.FC<Props> = ({ children, delay = 0 }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInOnView;
