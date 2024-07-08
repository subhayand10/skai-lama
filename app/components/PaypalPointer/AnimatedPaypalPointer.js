import React from 'react'
import { motion } from "framer-motion";

const AnimatedPaypalPointer = ({children}) => {
   return (
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: [0, 100, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedPaypalPointer