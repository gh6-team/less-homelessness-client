import React from 'react';
import {Row, Col, InputLabel, Button, ButtonGroup, TextInput} from "react-bootstrap";


export default class ServiceDetail extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      need: this.props.need};
  }


  render() {
    return (
      <div>
        <h1>{this.props.need.name}</h1>
        <Row>
          <Col xs={11}>
            <ButtonGroup>
              <Button bsStyle="primary" onClick={this.props.selectedItem}>Return</Button>
              <Button bsStyle="primary">Save</Button>
            </ButtonGroup>
          </Col>
        </Row>
      </div>
    );
  }
}
