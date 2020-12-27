import React from 'react';

import './App.css';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom' 

import Home from './Pages/index';
import SignInPage from './Pages/signIn'
import SignUp from './Components/SignUp';
import Send from './Components/Send';
import Volun from './Components/Volun';
function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/signin' component={SignInPage} exact/>
          <Route path='/signup' component={SignUp}></Route>
          <Route path='/send' component={Send}></Route>
          <Route path='/volunteer' component={Volun}></Route>
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
