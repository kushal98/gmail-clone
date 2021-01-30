import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Mail from './components/Mail';
import MailList from './components/MailList';

import './App.css';

function App() {
  return (
    
    <Router>
      <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route path="/mail">
              <Mail />
            </Route>
            <Route path="/">
              <MailList />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
