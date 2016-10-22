import React from 'react';
import {Row, Col, Panel, Button} from "react-bootstrap";
import {browserHistory} from "react-router";
import "../../images/handshake_background.jpg";

export default class HomePage extends React.Component {

  constructor(props) {
    super(props);

    this.bindHandlers();
  }

  bindHandlers() {
    this.onStartIntakeButtonClick = this.onStartIntakeButtonClick.bind(this);
  }

  onStartIntakeButtonClick() {
    browserHistory.push("/intake");
  }

  render() {
    const background_style = {
      background: "url('/handshake_background.jpg') no-repeat center center fixed",
      height: "100%"
    };

    return (
      <div style={background_style}>
        <Row style={{marginLeft: "15px"}}>
          <h1 style={{color: "green"}}>Less Homelessness</h1>
          <h4>Empowering people to combat chronic homelessness...</h4>
        </Row>
        <Panel style={{borderWidth:"2px", backgroundColor: "rgba(255, 255, 255, 0.87)", marginTop: "20px", marginLeft: "auto", marginRight: "auto", width: "50%"}}>
          <div>Lets get started getting you help.</div>
          <div>Please click below to answer some quick questions so we can find resources to help you.</div>
          <Row style={{textAlign:"center"}}>
            <Col xs={12}>
              <Button style={{marginTop: "10px"}} bsStyle="success" onClick={this.onStartIntakeButtonClick}>Start</Button>
            </Col>
          </Row>
        </Panel>
      </div>
    );
  }

}
