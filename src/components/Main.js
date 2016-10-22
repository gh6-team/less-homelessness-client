import React from 'react';
import {Router, Route, browserHistory} from 'react-router';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

import HomePage from './HomePage';
import LoginPage from './LoginPage';
import NotFoundPage from './NotFoundPage';
import IntakeSurveyPage from './intake-survey/IntakeSurveyPage';

export default class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedUser: null
    };

    this.onLoginClicked = this.onLoginClicked.bind(this);
  }

  _getInitializedRouter() {
    return (
      <Router history={browserHistory}>
        <Route path="/"
               component={() => {return (<HomePage/>);}}
        />
        <Route path="/login"
               component={() => {return (<LoginPage/>);}}
        />
        <Route path="/intake"
               componet={() => {return (<IntakeSurveyPage/>);}}
        />
        <Route path="*"
               component={() => {return (<NotFoundPage/>);}}
        />
      </Router>
    );
  }

  onLoginClicked() {
    browserHistory.push("/login");
  }

  render() {
    if(!this.router) {
      this.router = this._getInitializedRouter();
    }
    return (
      <div style={{height: "100%", width: "100%", backgroundColor: "#dad8d8"}}>
        <Navbar staticTop fluid inverse >
            <Navbar.Header>
              <Navbar.Brand>-HL</Navbar.Brand>
            </Navbar.Header>
          {
            (this.state.loggedUser) ?
              <span>{this.state.loggedUser}</span>
              :
              <Nav>
                <NavItem onClick={this.onLoginClicked}>Login</NavItem>
              </Nav>
          }
          </Navbar>
          {this.router}
      </div>
    );
  }



}
