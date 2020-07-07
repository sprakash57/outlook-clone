import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import Auth from './components/screens/Auth';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={Auth} />
      </Switch>
    </HashRouter>
  );
}

export default App;
