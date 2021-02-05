import React from 'react';
import AllCharacters from '../AllCharacters.jsx';
import Detail from '../Detail.jsx';
import {
  BrowserRouter as Router, 
  Route,
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <switch>
        <Route 
          path="/"
          onClick={() => <Route 
            path="/:name" 
            exact
            render={(routerProps) => 
              <Detail {...routerProps} />}
          />}
          exact
          render={(routerProps) => 
            <AllCharacters {...routerProps} />} 
        />
      </switch>
    </Router>
  );
}
