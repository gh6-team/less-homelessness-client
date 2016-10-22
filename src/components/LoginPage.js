import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';

import TextInput from './common/TextInput';

import LoginAction from '../actions/LoginAction';

export default class LoginPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userId: null,
      password: null
    };
    this.onUserIdChanged = this.onUserIdChanged.bind(this);
    this.onPasswordChanged = this.onPasswordChanged.bind(this);
    this.onLoginSubmitClick = this.onLoginSubmitClick.bind(this);
  }

  onUserIdChanged(value) {
    this.setState({
      userId: value
    });
  }

  onPasswordChanged(value) {
    this.setState({
      password: value
    });
  }

  onLoginSubmitClick() {
    let userCredentials = {
      userId: this.state.userId,
      password: this.state.password
    };
    LoginAction.performLogin(userCredentials);
  }

  render() {
    let loginRowStyle = {padding: "5px"};
    return (<div>
      <h1>Login to your account</h1>
      <Row>
        <Col xs={12}>

          <Row style={loginRowStyle}>
            <Col xs={12}>
              <h3>Already a member? Log in with your existing account:</h3>
            </Col>
          </Row>

          <Row style={loginRowStyle}>
            <Col xs={6}>
              Username:
            </Col>
            <Col xs={6}>
              <TextInput type="text" value={this.state.userId} onChange={this.onUserIdChanged}/>
            </Col>
          </Row>

          <Row style={loginRowStyle}>
            <Col xs={6}>
              Password
            </Col>
            <Col xs={6}>
              <TextInput type="password" value={this.state.password} onChange={this.onPasswordChanged}/>
            </Col>
          </Row>

          <Row style={loginRowStyle}>
            <Col xs={12}>
              <Button bsStyle="success" onClick={this.onLoginSubmitClick}>Login</Button>
            </Col>
          </Row>

        </Col>

      </Row>
    </div>);
  }

}
