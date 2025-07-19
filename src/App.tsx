import './App.css';
import {AnimatePresence } from 'framer-motion';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <AnimatePresence>
      <Outlet />
    </AnimatePresence>
  );
}

export default App;
