import { jsx as _jsx } from "react/jsx-runtime";
import './App.css';
import { AnimatePresence } from 'framer-motion';
import { Outlet } from 'react-router-dom';
function App() {
    return (_jsx(AnimatePresence, { children: _jsx(Outlet, {}) }));
}
export default App;
