import React from 'react';
import {Router, Route} from 'react-router';

import { Navbar, Nav, NavItem, Grid, Row, Col } from 'react-bootstrap';

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
  }

  _getInitializedRouter() {
    return (
      <Router>
        <Route path="/"
               component={() => {return (<HomePage/>);}}
        />
        <Route path="/login"
               component={() => {return (<LoginPage/>);}}
        />
        <Route path="*"
               component={() => {return (<NotFoundPage/>);}}
        />
        <Route path="/intake"
               componet={() => {return (<IntakeSurveyPage/>);}}
        />
      </Router>
    );
  }

  render() {
    if(!this.router) {
      this.router = this._getInitializedRouter();
    }
    return (<div>
      <Navbar staticTop fluid inverse >
          <Navbar.Header>
            <Navbar.Brand>-HL</Navbar.Brand>
          </Navbar.Header>
        {
          (this.state.loggedUser) ?
            <span>{this.state.loggedUser}</span>
            :
            <Nav>
              <NavItem href="/#/login">Login</NavItem>
            </Nav>
        }

        </Navbar>
      <Grid>
        <Row>
          <Col xs={12}>
            {this.router}
          </Col>
        </Row>
      </Grid>
    </div>);
  }



}
