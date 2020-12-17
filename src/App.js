import React from 'react';

import './App.css';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom' 

import Home from './Pages/index';
import SignInPage from './Pages/signIn'
function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/signin' component={SignInPage} exact/>
          
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
