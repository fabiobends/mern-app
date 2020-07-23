import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Home from './components/home';
import CreateUser from './components/createUser';
import UpdateUser from './components/updateUser';
import InfoUser from './components/infoUser';
import NotFound from './components/notFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/info/:id' component={InfoUser} />
        <Route path='/info/' component={InfoUser} />
        <Route path='/update' component={UpdateUser} />
        <Route path='/create' component={CreateUser} />
        <Route path='/' exact component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
