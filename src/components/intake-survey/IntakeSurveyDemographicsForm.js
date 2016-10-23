import React from 'react';
import InputLabel from "../common/InputLabel";
import TextInput from "../common/TextInput";
import {Row} from 'react-bootstrap';

export default class IntakeSurveyDemographicsForm extends React.Component {

  constructor(props) {
    super(props);

    this.onGenderChanged = this.onGenderChanged.bind(this);
    this.onVeteranStatusChanged = this.onVeteranStatusChanged.bind(this);
    this.onEthnicityChanged = this.onEthnicityChanged.bind(this);
    this.onDateOfBirthChanged = this.onDateOfBirthChanged.bind(this);
  }

  _changeClientInfo(field, value) {
    let clone = JSON.parse(JSON.stringify(this.props.clientInfo));
    clone[field] = value;
    this.props.onClientInfoChange(clone);
  }

  onGenderChanged(value) {
    this._changeClientInfo("contact_phone", value);
  }

  onVeteranStatusChanged(value) {
    this._changeClientInfo("contact_email", value);
  }

  onEthnicityChanged(value) {
    this._changeClientInfo("english_proficiency", value);
  }

  onDateOfBirthChanged(value) {
    this._changeClientInfo("date_of_birth", value);
  }

  render() {
    return (
      <div>
        <Row>
          <InputLabel value={"Gender:"} style={{minWidth: "212px"}}/>
          <InputLabel value={"Ethnicity:"} style={{minWidth: "212px"}}/>
        </Row>
        <Row>
          <TextInput style={{marginLeft: "12px", width: "200px"}} value={this.props.clientInfo.gender}
                     onChange={this.onGenderChanged}/>
          <TextInput style={{marginLeft: "12px", width: "200px"}} value={this.props.clientInfo.ethnicity}
                     onChange={this.onEthnicityChanged}/>
        </Row>
        <Row>
          <InputLabel value={"Veteran Status:"} style={{minWidth:"212px"}}/>
          <InputLabel value={"Date of Birth:"} style={{minWidth:"212px"}}/>
        </Row>
        <Row>
          <TextInput style={{marginLeft: "12px", width: "200px"}} value={this.props.clientInfo.veteran}
                     onChange={this.onVeteranStatusChanged}/>
          <TextInput style={{marginLeft: "12px", width: "200px"}} value={this.props.clientInfo.date_of_birth}
                     onChange={this.onDateOfBirthChanged}/>
        </Row>

      </div>
    );
  }
}

IntakeSurveyDemographicsForm.propTypes = {
  clientInfo: React.PropTypes.object.isRequired,
  goToNextTab: React.PropTypes.func,
  onClientInfoChange: React.PropTypes.func.isRequired
};

IntakeSurveyDemographicsForm.defaultProps = {};
