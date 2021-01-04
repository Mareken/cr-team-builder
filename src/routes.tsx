import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Initial from './pages/Initial';
import Signup from './pages/Signup';
import Login from './pages/Login';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path='/' component={Initial} />
      <Route path='/signup' component={Signup} />
      <Route path='/login' component={Login} />
    </Switch>
  );
}

export default Routes;