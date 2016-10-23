 import React from 'react';
 import {Modal, Row, Col, Button, Nav, NavItem} from 'react-bootstrap';
 import TextInput from './common/TextInput';
import LoginAction from '../actions/LoginAction';

export default class LoginPage extends React.Component {

   constructor(props) {
     super(props);
     this.state = {
       showModal: false,
       userId: null,
       password: null
     };
     this.onUserIdChanged = this.onUserIdChanged.bind(this);
     this.onPasswordChanged = this.onPasswordChanged.bind(this);
     this.onPasswordKeyPress = this.onPasswordKeyPress.bind(this);
     this.close = this.close.bind(this);
     this.open = this.open.bind(this);
     this.onLoginSubmitClick = this.onLoginSubmitClick.bind(this);
   }

   close() {
     this.setState({ showModal: false });
   }

   open() {
     this.setState({ showModal: true });
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

  onPasswordKeyPress(event) {
    const ENTER_KEY = 13;
    if (event.charCode === ENTER_KEY && this.state.userId && this.state.password) {
      this.onLoginSubmitClick();
    }
  }

   render() {
     let loginRowStyle = {padding:"5px"};
     return (
     <div><Nav pullRight>
       <NavItem onClick={this.open}>Login</NavItem>
     </Nav>
       <Modal show={this.state.showModal} onHide={this.close}>
         <Modal.Header style={{backgroundColor:"forestgreen"}}>
           <h2 style={{color:"white"}}>Login to your account</h2>
         </Modal.Header>
         <Modal.Body>
           <Row>
             <Col xs={12}>

               <Row>
                 <Col xs={12}>
                   <h4>Already a member? Log in with your existing account:</h4>
                 </Col>
               </Row>

               <Row style={loginRowStyle}>
                 <Col xs={3} style={{textAlign:"right", padding:"5px"}}>
                   Username
                 </Col>
                 <Col xs={9}>
                   <TextInput type="text" value={this.state.userId} onChange={this.onUserIdChanged}/>
                 </Col>
               </Row>

               <Row style={loginRowStyle}>
                 <Col xs={3} style={{textAlign:"right", padding:"5px"}}>
                   Password
                 </Col>
                 <Col xs={9}>
                   <TextInput type="password" value={this.state.password} onChange={this.onPasswordChanged} onKeyPress={this.onPasswordKeyPress}/>
                 </Col>
               </Row>
             </Col>
           </Row>
         </Modal.Body>
         <Modal.Footer>
           <Button onClick={this.close}>Close</Button>
           <Button bsStyle="success" disabled={!(this.state.userId && this.state.password)} onClick={this.onLoginSubmitClick}>Login</Button>
         </Modal.Footer>
       </Modal>
     </div>);
   }

 }
