 import React from 'react';
 import {Row, Col} from 'react-bootstrap';

 export default class LoginPage extends React.Component {

   constructor(props) {
     super(props);
     this.state = {
       username: null,
       password: null
     };
     this.handleUsernameChange.bind(this);
     this.handlePasswordChange.bind(this);
   }

   handleUsernameChange(event) {
    event.stopPropagation();
   }

   handlePasswordChange(event) {

   }

   render() {
     return <div>
       <h1>Login to your account</h1>
       <Row>
         <Col xs={12}>
          <input type={"text"} value={this.state.username} onChange={this.handleUsernameChange}/>
          <input type={"password"} value={this.state.password} onChange={this.handlePasswordChange}/>
         </Col>
       </Row>
     </div>;
   }

 }
