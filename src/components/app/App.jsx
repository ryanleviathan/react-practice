import React from 'react';
import AllCharacters from '../AllCharacters.jsx';
import Detail from '../Detail.jsx';
import {
  BrowserRouter as Router,
  Switch, 
  Route,
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route 
          path="/"
          exact
          render={(routerProps) => 
            <AllCharacters {...routerProps} />} 
        />
        <Route 
          path="/charcater/:id" 
          exact
          render={(routerProps) => 
            <Detail {...routerProps} />}
        />
      </Switch>
    </Router>
  );
}
