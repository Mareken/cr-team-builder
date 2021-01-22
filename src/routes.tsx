import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import useAuth from './context/AuthContext';

import Initial from './pages/Initial';
import Signup from './pages/Signup';
import Login from './pages/Login';
import MyComps from './pages/MyComps';

const Routes: React.FC = () => {
  const { currentUser } = useAuth();

  return (
    <Switch>
      <Route exact path='/' component={Initial} />
      <Route exact path='/?u=:uid&t=:id' component={Initial} />
      <Route exact path='/signup'>
        { currentUser ? <Redirect to='/' /> : <Signup /> }
      </Route>
      <Route exact path='/login'>
        { currentUser ? <Redirect to='/' /> : <Login /> }
      </Route>
      <Route exact path='/:userId/my-comps'>
        { currentUser ? <MyComps /> : <Redirect to='/' /> }
      </Route>
    </Switch>
  );
}

export default Routes;