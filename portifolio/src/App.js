import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SquarePage from './pages/SquarePage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SquarePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
