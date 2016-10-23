import React from 'react';
import {Row, Col, Button, ButtonGroup} from "react-bootstrap";


export default class ServiceDetail extends React.Component {

  static propTypes = {
    need: React.PropTypes.object,
    selectedItem: React.PropTypes.object
  };

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      need: this.props.need};
  }

  render() {
    return (
      <div>
        <h1>{this.props.need.service}</h1>
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
