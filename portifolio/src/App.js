import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import SquarePage from './pages/SquarePage';
import PortifolioPage from './pages/PortifolioPage';
import ResumePage from './pages/ResumePage';
import Blog from './pages/BlogPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SquarePage} />
        <Route path="/sobre" component={AboutPage} />
        <Route path="/portifolio" component={PortifolioPage} />
        <Route path="/curriculo" component={ResumePage} />
        <Route path="/blog" component={Blog} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
