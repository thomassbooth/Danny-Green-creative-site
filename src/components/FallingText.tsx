'use client'

import { motion } from "framer-motion";
import { useState } from "react";

const fallDown = {
  init: {
    y: "0%"
  },

  hover: (i: number) => ({
    y: "-100%",
    transition: { type: "spring", duration: 1, delay: 1+ i * 0.015 }
  }),

  exit: (i: number) => ({
    y: "0%",
    transition: { type: "spring", duration: 1, delay: 1+ i * 0.024 }
  })
};

export default function FallingText({ text }: { text: string }) {
  const [variant, setVariant] = useState("init");

  const letters = text.split("").map((letter, i) => (
    <motion.span
      className="relative inline-block"
      key={i}
      custom={i}
      variants={fallDown} 
      animate={variant}
    >
      {letter}
    </motion.span>
  ));

  return (
    <span
      onMouseEnter={() => setVariant("hover")}
      onMouseLeave={() => setVariant("exit")}
      className="relative leading-none inline-flex overflow-hidden uppercase"
    >
      <span>{letters}</span>
      <span className="absolute top-0 left-0 translate-y-full">
        {letters}
      </span>
    </span>
  );
}