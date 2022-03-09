import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";

import "./message.css";

export default function Message({ visible, text }) {
  const [typing, setTyping] = useState(false);

  const variantsText = {
    visible: {
      heigth: "100%",
      display: "flex",
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    hidden: {
      heigth: 0,
      display: "none",
      opacity: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const variantsTyping = {
    visible: {
      heigth: "100%",
      display: "flex",
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    hidden: {
      heigth: 0,
      display: "none",
      opacity: 0,
      transition: {
        delay: 0.3,
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    if (visible) {
      setTyping(true);

      const timeout = setTimeout(() => {
        setTyping(false);
      }, 2000);

      return () => {
        timeout;
      };
    }
  }, [visible]);

  return (
    <>
      <motion.div
        id="message"
        initial="hidden"
        variants={variantsText}
        animate={visible && !typing ? "visible" : "hidden"}
      >
        {text}
      </motion.div>
      <motion.div
        id="message"
        initial="hidden"
        variants={variantsTyping}
        animate={typing ? "visible" : "hidden"}
      >
        ...
      </motion.div>
    </>
  );
}
