import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import useAuth from './context/AuthContext';

import Initial from './pages/Initial';
import Signup from './pages/Signup';
import Login from './pages/Login';

const Routes: React.FC = () => {
  const { currentUser } = useAuth();

  return (
    <Switch>
      <Route exact path='/' component={Initial} />
      <Route path='/signup'>
        { currentUser ? <Redirect to='/' /> : <Signup /> }
      </Route>
      <Route path='/login'>
        { currentUser ? <Redirect to='/' /> : <Login /> }
      </Route>
    </Switch>
  );
}

export default Routes;