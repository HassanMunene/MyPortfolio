import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
// import other pages if any

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        {/* Add other routes here */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
