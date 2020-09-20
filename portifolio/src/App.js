import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PortifolioPage from './pages/PortifolioPage';
import SquarePage from './pages/SquarePage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SquarePage} />
        <Route path="/portifolio" exact component={PortifolioPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
