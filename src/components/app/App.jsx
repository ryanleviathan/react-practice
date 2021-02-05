import React from 'react';
import AllCharacters from '../AllCharacters.jsx';
import {
  BrowserRouter as Router, 
  Route,
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <switch>
        <Route 
          path="/pokedex" 
          exact
          render={(routerProps) => 
            <AllCharacters {...routerProps} />} 
        />
        <Route 
          path="/detail/:pokemonName" 
          exact
          render={(routerProps) => 
            <DetailCharacters {...routerProps} />} 
        />
      </switch>
    </Router>
  );
}
