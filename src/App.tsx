import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import Auth from './components/screens/Auth';
import PrivateRoute from './routes/PrivateRoute';
import Mailbox from './components/screens/Mailbox';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={Auth} />
        <Route exact path='/mailbox' component={Mailbox} />
      </Switch>
    </HashRouter>
  );
}

export default App;
