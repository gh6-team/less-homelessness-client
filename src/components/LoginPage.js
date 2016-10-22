 import React from 'react';
 import {Row, Col} from 'react-bootstrap';

 import TextInput from './common/TextInput';

 export default class LoginPage extends React.Component {

   constructor(props) {
     super(props);
     this.state = {
       username: null,
       password: null
     };
     this.onUsernameChanged.bind(this);
     this.onPasswordChanged.bind(this);
   }

   onUsernameChanged(event) {
     event.stopPropagation();
     let newValue = event.target.value;
     this.setState({
       username: newValue
     });
   }

   onPasswordChanged(event) {
     event.stopPropagation();
     let newValue = event.target.value;
     this.setState({
       password: newValue
     });
   }

   render() {
     let loginRowStyle = {padding:"5px"};
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
             <TextInput type="text" value={this.state.username} onChange={this.onUsernameChanged}/>
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

           </Col>




       </Row>
     </div>);
   }

 }
