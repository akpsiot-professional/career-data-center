import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import NavigationBar from './Components/NavigationBar';
import './App.css';

// Custom components
import App from './App';
import Jobs from './Components/Jobs';
import Reviews from './Components/Reviews';
import Resumes from './Components/Resumes';
import JobOpportunities from './Components/JobOpportunities';

ReactDOM.render(
  <BrowserRouter>
    <NavigationBar className="Nav-bar"/>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/jobs" component={Jobs} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/resumes" component={Resumes} />
      <Route path="/job_opportunities" component={JobOpportunities} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
