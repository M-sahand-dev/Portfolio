import './App.css';
import { motion, AnimatePresence } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import { Header } from './components';
import { pageVariants } from './constants';

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

      <Outlet/>
    </>
  );
}

export default App;
