import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import LandingPage from './components/LandingPage';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
createRoot(document.getElementById('root')).render(_jsx(StrictMode, { children: _jsx(BrowserRouter, { children: _jsx(Routes, { children: _jsx(Route, { path: "/", element: _jsx(App, {}), children: _jsx(Route, { index: true, element: _jsx(LandingPage, {}) }) }) }) }) }));
