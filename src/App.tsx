import './App.css'
import { useState , useEffect } from 'react';
import { motion , AnimatePresence} from 'framer-motion';

import { Header } from './helper/components.js';
import { pageVariants } from "./helper/animation";

function App() {


  return (
    <>
      <AnimatePresence>
        <motion.div
          key="content"
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          className="main-content"
        >
          <Header />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default App
