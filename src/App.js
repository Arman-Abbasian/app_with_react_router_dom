import './App.css';
import React from 'react';
import Routee from './routes';
import Layout from './Layout/Layout';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
   <div className='p-4 container mx-auto'>
      <Layout>      
          <Routee />
      </Layout>
   </div>
  );
}

export default App;
