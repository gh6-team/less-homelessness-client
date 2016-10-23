import React from 'react';
import {Row, Col, Button, ButtonGroup} from "react-bootstrap";
import TextInput from "../common/TextInput";

export default class ServiceDetail extends React.Component {

  static propTypes = {
    need: React.PropTypes.object,
    onSelectionChanged: React.PropTypes.func,
    onSave: React.PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      need: this.props.need
    };
    this.onMaxAvailableChanged = this.onMaxAvailableChanged.bind(this);
  }

  onMaxAvailableChanged(value){
    let clone = JSON.parse(JSON.stringify(this.state.need));
    clone.max_availability = value;
    this.setState({need: clone});
  }

  render() {
    return (
      <div>
        <h1>{this.props.need.service}</h1>
        <Row>
          <Col xs={11}>
            <TextInput style={{marginLeft: "12px", marginRight: "12px", width: "200px"}}
                       onChange={this.onMaxAvailableChanged}
                       value={this.state.need.max_availability}/>
            <ButtonGroup>
              <Button bsStyle="primary" onClick={this.props.onSelectionChanged}>Return</Button>
              <Button bsStyle="primary" onClick={this.props.onSave.bind(this, this.state.need)}>Save</Button>
            </ButtonGroup>
          </Col>
        </Row>
      </div>
    );
  }
}
