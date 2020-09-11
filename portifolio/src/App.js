import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import SquarePage from './pages/SquarePage';
import PortifolioPage from './pages/PortifolioPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SquarePage} />
        <Route path="/sobre" component={AboutPage} />
        <Route path="/portifolio" component={PortifolioPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
