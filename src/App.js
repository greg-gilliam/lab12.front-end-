import { Component } from 'react';
 import { BrowserRouter, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import './App.css';
import Auth from './Auth.js';
import ToDos from './ToDos.js';

class Home extends Component {
  render() { 
    return <h1>Home Page</h1>;
  }
}

class App extends Component {
  state = { 
    token: localStorage.getItem('TOKEN'),
   };
  setToken = (val) => {
    this.setState({ token: val });
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
          <div>APP TOKEN: {this.state.token && this.state.token.toString()}</div>
      </header>
      <section className="main">
          <Switch>
              <Route exact path="/" component={Home} />
              <Route 
                path="/signIn"
                render={(routerProps) => (
                <Auth 
                setToken={this.setToken}
                type="signin" {...routerProps} />
              )}
              />
              <Route 
                path="/signUp"
                render={(routerProps) => (
                <Auth 
                setToken={this.setToken}
                type="signup" {...routerProps}/>
                )}
                />
                <Route
                  path="/ToDos"
                  render={(routerProps) => this.state.token ? (
                    <ToDos {...routerProps} />
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
