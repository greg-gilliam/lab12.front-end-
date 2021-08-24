import { Component } from 'react';
 import { BrowserRouter, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import './App.css';
import Auth from './Auth.js';
import toDos from './toDos.js';

class Home extends Component {
  render() { 
    return <h1>Home Page</h1>;
  }
}

class App extends Component {
  state = { loggedIn: false, };
  setLoggedIn = (val) => {
    this.setState({ loggedIn: val });
  };
  render() { 
    return ( 
      <BrowserRouter>
      <header>
          <NavLink to="/" exact>
              Home
          </NavLink>
          <NavLink to="/signIn">Sign In</NavLink>
          <NavLink to="/signUp">Sign Up</NavLink>
          <div>APP LOGGED IN STATE: {this.state.loggedIn.toString()}</div>
      </header>
      <section className="main">
          <Switch>
              <Route exact path="/" component={Home} />
              <Route 
                path="/signIn"
                render={(routerProps) => (
                <Auth 
                setLoggedIn={this.setLoggedIn}
                type="signIn" {...routerProps} />
              )}
              />
              <Route 
                path="/signUp"
                render={(routerProps) => (
                <Auth type="signUp" {...routerProps}/>
                )}
                />
                <Route
                  path="/toDos"
                  render={(routerProps) => this.state.loggedIn ? (
                    <toDos {...routerProps} />
                  ) : (
                    <Redirect to="/signIn" />
                  )}
                  />
          </Switch>
      </section>
  </BrowserRouter>
     );
  }
}
 


export default App;
