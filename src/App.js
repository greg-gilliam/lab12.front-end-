import { Component } from 'react';
 import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Auth from './Auth.js';

class Home extends Component {
  render() { 
    return <h1>Home Page</h1>;
  }
}

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <BrowserRouter>
      <header>
          <NavLink to="/" exact>
              Home
          </NavLink>
          <NavLink to="/signIn">Sign In</NavLink>
          <NavLink to="/signUp">Sign Up</NavLink>
      </header>
      <section className="main">
          <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/signIn">
                  <Auth type="signIn" />
              </Route>
              <Route path="/signUp">
                  <Auth type="signUp" />
              </Route>
          </Switch>
      </section>
  </BrowserRouter>
     );
  }
}
 


export default App;
