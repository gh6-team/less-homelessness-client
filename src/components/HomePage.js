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
        <Row style={{textAlign:"center", backgroundColor:"rgba(255,255,255,0.6)", borderBottom:"1px solid white"}}>
          <h1 style={{color: "green", textShadow:"1px 1px 0 rgba(255,255,255,0.4)"}}>Less Homelessness</h1>
          <h4 style={{fontStyle:"italic", paddingBottom:"5px"}}>Empowering people to combat chronic homelessness</h4>
        </Row>
        <Panel style={{borderWidth:"2px", backgroundColor: "rgba(255, 255, 255, 0.87)", marginTop: "20px", marginLeft: "auto", marginRight: "auto", width: "50%"}}>
          <div style={{textAlign:"center"}}>Lets get started getting you help.</div>
          <div style={{textAlign:"center"}}>Please click below to answer some quick questions so we can find resources to help you.</div>
          <Row style={{textAlign:"center"}}>
            <Col xs={12}>
              <Button id="startButton" style={{marginTop: "10px"}} bsStyle="success" onClick={this.onStartIntakeButtonClick}>Start</Button>
            </Col>
          </Row>
        </Panel>
      </div>
    );
  }

}
