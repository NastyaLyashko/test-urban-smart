import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { createLogin } from '../../redux/actionCreator'
import { useDispatch } from 'react-redux';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';

function App() {

  const dispatch = useDispatch();

  const history = useHistory();

  const handleLogin = (data) => {
    dispatch(createLogin(data));
    history.push('/profile');
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main onLogin={handleLogin} />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
