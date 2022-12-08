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
   <div className='w-screen h-screen'>
      <Layout>
        <Routee />
      </Layout>
   </div>
  );
}

export default App;
