import './App.css';
import React from 'react';
import {Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Navigation from './components/Navigation';
import Routee from './routes';
import Layout from './Layout/Layout';

function App() {
  return (
   <div className='w-screen h-screen p-4 container mx-auto max-w-7xl'>
      <Layout>
        <Routee />
      </Layout>
   </div>
  );
}

export default App;
