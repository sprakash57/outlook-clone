import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import Auth from './components/screens/Auth';
import PrivateRoute from './routes/PrivateRoute';
import Mailbox from './components/screens/Mailbox';
import PageNotFound from './components/screens/PageNotFound';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={Auth} />
        <PrivateRoute exact path='/mailbox' component={Mailbox} />
        <Route component={PageNotFound} />
      </Switch>
    </HashRouter>
  );
}

export default App;
