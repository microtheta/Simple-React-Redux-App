import React from 'react';
import {
  Route,
  Redirect 
} from 'react-router-dom';

import Home from './home';
import Counter from './counter';
import About from './about';


const Routes = (
    <div>
      <Route exact path="/" render={() => (<Redirect to="/home"/>)}/>
      <Route path="/home" component={Home}/>
      <Route path="/counter" component={Counter}/>
      <Route path="/about" component={About}/>
    </div>
);

export default Routes;

