import React from 'react';
import {Row, Col, Panel, Button} from "react-bootstrap";
import "../../images/handshake_background.jpg";

export default class HomePage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const background_style = {
      background: "url('/handshake_background.jpg') no-repeat center center fixed",
      height: "100%"
    };

    return (
      <div style={background_style}>
        <Row>
          <h1 style={{}}>Less Homelessness</h1>
          <h4>Empowering people to combat chronic homelessness...</h4>
        </Row>
        <Row>
          <Col xs={6} xsOffset={3} style={{textAlign: "left"}}>
            <Panel style={{borderWidth:"2px"}}>
              <div>Lets get started getting you help.</div>
              <div>Please click below to answer some quick questions so we can find resources to help you.</div>
              <Row style={{textAlign:"center"}}>
                <Col xs={12}>
                  <Button style={{marginTop: "10px"}} bsStyle="success">Start</Button>
                </Col>
              </Row>
            </Panel>
          </Col>
        </Row>
      </div>
    );
  }

}
