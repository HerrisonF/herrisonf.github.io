import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import SquarePage from './pages/SquarePage';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SquarePage} />
        <Route path="/sobre" component={AboutPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
