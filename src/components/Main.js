import React from 'react';
import {Router, Route, browserHistory} from 'react-router';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

import UserStore from '../stores/UserStore';

import LoginAction from '../actions/LoginAction';

import HomePage from './HomePage';
import LoginPage from './LoginPage';
import NotFoundPage from './NotFoundPage';
import ShelterMapPage from './map/ShelterMapPage';
import IntakeSurveyPage from './intake-survey/IntakeSurveyPage';
import CareWorkerHomePage from './care-worker-dashboard/CareWorkerHomePage.js';

import UserRoles from '../constants/userRoles';

export default class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: null,
      userRole: null
    };

    this._onUserStoreChanged = this._onUserStoreChanged.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
    this.onHomeClicked = this.onHomeClicked.bind(this);
    this._routeLoggedUser = this._routeLoggeduser.bind(this);
    this.onLogoutClicked = this.onLogoutClicked.bind(this);
  }

  componentDidMount() {
    UserStore.addChangeListener(this._onUserStoreChanged);
  }

  componentWillUnmount() {
    UserStore.removeChangeListener(this._onUserStoreChanged);
  }

  _onUserStoreChanged() {
    const userStoreState = UserStore.getState();
    const newUserLogged = (userStoreState && userStoreState.username && (userStoreState.username !== this.state.username));
    if (newUserLogged) {
      this.setState({
        username: userStoreState.username,
        userRole: userStoreState.userRole
      }, this._routeLoggedUser);
      return;
    }

    const userLoggedOut = (userStoreState && this.state.username && (!userStoreState.username));
    if (userLoggedOut) {
      this.setState({
        username: null,
        userRole: null
      }, this._routeLoggedUser);
    }
  }

  onLogoutClicked() {
    LoginAction.performLogout();
  }

  _routeLoggeduser() {
    if (this.state.username) {
      if (this.state.userRole === UserRoles.CLIENT) {
        browserHistory.push("/map");
      } else if (this.state.userRole === UserRoles.WORKER) {
        browserHistory.push("/care");
      }
      return;
    }

    browserHistory.push("/");
  }

  _getInitializedRouter() {
    return (
      <Router history={browserHistory}>
        <Route path="/"
               component={() => {
                 return (<HomePage/>);
               }}
        />
        <Route path="/intake"
               component={() => {
                 return (<IntakeSurveyPage/>);
               }}
        />
        <Route path="/map"
               component={() => {
                 return (<ShelterMapPage/>);
               }}
        />
        <Route path="/care"
               component={() => {
                 return (<CareWorkerHomePage/>);
               }}
        />
        <Route path="*"
               component={() => {
                 return (<NotFoundPage/>);
               }}
        />
      </Router>
    );
  }

  onHomeClicked() {
    browserHistory.push("/");
  }

  onMapClicked() {
    browserHistory.push("/map");
  }

  onCareDashboardClicked() {
    browserHistory.push("/care");
  }

  render() {
    if (!this.router) {
      this.router = this._getInitializedRouter();
    }
    return (
      <div style={{height: "100%", width: "100%", backgroundColor: "#dad8d8"}}>
        <Navbar staticTop fluid inverse>
          <Navbar.Header>
            <Navbar.Brand className="homeLogo" onClick={this.onHomeClicked}>
              <img src="../styles/images/logo.png" width={50} height={50} alt="Less Homelessness" onClick={this.onHomeClicked}/>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse className="bs-navbar-collapse">
          {
            (this.state.username) ?
              <Nav pullRight>
                <div className="navbar-text">Logged in as {this.state.username}</div> <NavItem onClick={this.onLogoutClicked}>Logout</NavItem>
              </Nav>
              :
              <LoginPage />
          }
          <Nav>
            <NavItem onClick={this.onMapClicked}>Map</NavItem>
          </Nav>
            {this.state.userRole === UserRoles.WORKER ?
            <Nav>
              <NavItem onClick={this.onCareDashboardClicked}>Dashboard</NavItem>
            </Nav> : null}
            </Navbar.Collapse>
        </Navbar>
        {this.router}
      </div>
    );
  }


}
