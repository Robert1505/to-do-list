import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import SetYourGoals from './SetYourGoals';
import Goals from './Goals';
import './styles/custom.css';

function App(props) {
  return (
    <BrowserRouter>
      <Route path = "/" exact>
        <div className = "background">
          <SetYourGoals />
        </div>
      </Route>
      <Route path = '/goals'>
        <div className = "background">
          <Goals />
        </div>
      </Route>
    </BrowserRouter>
  );
}

export default App;
