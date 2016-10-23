import React from 'react';
import InputLabel from "../common/InputLabel";
import TextInput from "../common/TextInput";
import {Row} from 'react-bootstrap';

export default class IntakeSurveyNameForm extends React.Component {

  constructor(props) {
    super(props);

    this.onFirstNameChanged = this.onFirstNameChanged.bind(this);
    this.onMiddleNameChanged = this.onMiddleNameChanged.bind(this);
    this.onLastNameChanged = this.onLastNameChanged.bind(this);
  }

  _changeClientInfo(field, value) {
    let clone = JSON.parse(JSON.stringify(this.props.clientInfo));
    clone[field] = value;
    this.props.onClientInfoChange(clone);
  }

  onFirstNameChanged(value) {
    this._changeClientInfo("first_name", value);
  }

  onMiddleNameChanged(value) {
    this._changeClientInfo("middle_name", value);
  }

  onLastNameChanged(value) {
    this._changeClientInfo("last_name", value);
  }

  onSocialSecurityNumberChanged(value) {
    this._changeClientInfo("soc_sec_num", value);
  }

  onDriversLicenseNumberChanged(value) {
    this._changeClientInfo("drivers_license_num", value);
  }

  onDriversLicenseTerritoryChanged(value) {
    this._changeClientInfo("drivers_license_territory", value);
  }

  render() {
    return (
      <div>
        <Row>
            <InputLabel value={"First Name:"} style={{minWidth:"212px"}}/>
            <InputLabel value={"Middle Name:"} style={{minWidth:"212px"}}/>
            <InputLabel value={"Last Name:"} style={{minWidth:"212px"}}/>
        </Row>
        <Row>
            <TextInput style={{marginLeft: "12px", width: "200px"}} value={this.props.clientInfo.first_name}
                       onChange={this.onFirstNameChanged}/>
            <TextInput style={{marginLeft: "12px", width: "200px"}} value={this.props.clientInfo.middle_name}
                       onChange={this.onMiddleNameChanged}/>
            <TextInput style={{marginLeft: "12px", width: "200px"}} value={this.props.clientInfo.last_name}
                       onChange={this.onLastNameChanged}/>
        </Row>
        <Row>
          <InputLabel value={"Social Security Number:"} style={{minWidth:"212px"}}/>
          <InputLabel value={"Driver's License Number:"} style={{minWidth:"212px"}}/>
          <InputLabel value={"Driver's License Territory:"} style={{minWidth:"212px"}}/>
        </Row>
        <Row>
          <TextInput style={{marginLeft: "12px", width: "200px"}} value={this.props.clientInfo.soc_sec_num}
                     onChange={this.onSocialSecurityNumberChanged}/>
          <TextInput style={{marginLeft: "12px", width: "200px"}} value={this.props.clientInfo.drivers_license_num}
                     onChange={this.onDriversLicenseNumberChanged}/>
          <TextInput style={{marginLeft: "12px", width: "200px"}} value={this.props.clientInfo.drivers_license_territory}
                     onChange={this.onDriversLicenseTerritoryChanged}/>
        </Row>
      </div>
    );
  }

}

IntakeSurveyNameForm.PropTypes = {
  clientInfo: React.PropTypes.object.isRequired,
  goToNextTab: React.PropTypes.func.isRequired,
  onClientInfoChange: React.PropTypes.func.isRequired
};

IntakeSurveyNameForm.defaultProps = {};
