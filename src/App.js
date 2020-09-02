import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/UI/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path="/" component={Dashboard} />
    </BrowserRouter>
  );
}

export default App;
