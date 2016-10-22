import React from 'react';
import InputLabel from "../common/InputLabel";
import TextInput from "../common/TextInput";
import {Col, Row} from 'react-bootstrap';

export default class IntakeSurveyNamePage extends React.Component {

  constructor(props) {
    super(props);

    this.onFirstNameChanged = this.onFirstNameChanged.bind(this);
    this.onMiddleNameChanged = this.onMiddleNameChanged.bind(this);
    this.onLastNameChanged = this.onLastNameChanged.bind(this);
  }

  onFirstNameChanged(value) {
    let clone = JSON.parse(JSON.stringify(this.props.clientInfo));
    clone.first_name = value;
    this.props.onClientInfoChange(clone);
  }

  onMiddleNameChanged(value) {
    let clone = JSON.parse(JSON.stringify(this.props.clientInfo));
    clone.middle_name = value;
    this.props.onClientInfoChange(clone);
  }

  onLastNameChanged(value) {
    let clone = JSON.parse(JSON.stringify(this.props.clientInfo));
    clone.last_name = value;
    this.props.onClientInfoChange(clone);
  }

  render() {
    return (
      <div>
        <Row>
          <Col xshidden sm={4} lg={2}>
            <InputLabel value={"First Name:"}/>
          </Col>
          <Col xshidden sm={4} lg={2}>
            <InputLabel value={"Middle Name:"}/>
          </Col>
          <Col xshidden sm={4} lg={2}>
            <InputLabel value={"Last Name:"}/>
          </Col>
        </Row>
        <Row>
          <Col xs={4} lg={2}>
            <TextInput style={{marginLeft: "12px", width: "200px"}} value={this.props.clientInfo.first_name}
                       onChange={this.onFirstNameChanged}/>
          </Col>
          <Col xs={4} lg={2}>
            <TextInput style={{marginLeft: "12px", width: "200px"}} value={this.props.clientInfo.middle_name}
                       onChange={this.onMiddleNameChanged}/>
          </Col>
          <Col xs={4} lg={2}>
            <TextInput style={{marginLeft: "12px", width: "200px"}} value={this.props.clientInfo.last_name}
                       onChange={this.onLastNameChanged}/>
          </Col>
        </Row>
      </div>
    );
  }

}

IntakeSurveyNamePage.PropTypes = {
  clientInfo: React.PropTypes.object.isRequired,
  goToNextTab: React.PropTypes.func.isRequired,
  onClientInfoChange: React.PropTypes.func.isRequired
};

IntakeSurveyNamePage.defaultProps = {};
