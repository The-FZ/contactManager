import React from 'react';
import { Provider } from './components/Context';
import Contact from './components/Contacts/Contact';
import AddContact from './components/Contacts/AddContact';
import EditContact from './components/Contacts/EditContact';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/pages/About';
import Navbar from './components/pages/Navbar';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <Provider>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Contact} />
            <Route exact path='/contact/add' component={AddContact} />
            <Route exact path='/contact/edit/:id' component={EditContact} />
            <Route exact path='/about' component={About} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}

export default App;
