import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PortfolioPage from './pages/PortfolioPage';
import MasterPage from './pages/masterPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<MasterPage/>} />
        <Route path="/portfolio" exact element={<PortfolioPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
