import React from 'react';
import InputLabel from "../common/InputLabel";
import TextInput from "../common/TextInput";
import {Row} from 'react-bootstrap';

export default class IntakeSurveyContactInfoForm extends React.Component {

  constructor(props) {
    super(props);

    this.onContactPhoneChanged = this.onContactPhoneChanged.bind(this);
    this.onContactEmailChanged = this.onContactEmailChanged.bind(this);
    this.onEnglishProficiencyChanged = this.onEnglishProficiencyChanged.bind(this);
    this.onPreferredLanguageChanged = this.onPreferredLanguageChanged.bind(this);
  }

  _changeClientInfo(field, value) {
    let clone = JSON.parse(JSON.stringify(this.props.clientInfo));
    clone[field] = value;
    this.props.onClientInfoChange(clone);
  }

  onContactPhoneChanged(value) {
    this._changeClientInfo("contact_phone", value);
  }

  onContactEmailChanged(value) {
    this._changeClientInfo("contact_email", value);
  }

  onEnglishProficiencyChanged(value) {
    this._changeClientInfo("english_proficiency", value);
  }

  onPreferredLanguageChanged(value) {
    this._changeClientInfo("preferred_language", value);
  }

  render() {
    return (
      <div>
        <Row>
            <InputLabel value={"Contact Phone Number:"} style={{minWidth:"212px"}}/>
            <InputLabel value={"Contact Email:"} style={{minWidth:"212px"}}/>
        </Row>
        <Row>
            <TextInput style={{marginLeft: "12px", width: "200px"}} value={this.props.clientInfo.contact_phone}
                       onChange={this.onContactPhoneChanged}/>
            <TextInput style={{marginLeft: "12px", width: "200px"}} value={this.props.clientInfo.contact_email}
                       onChange={this.onContactEmailChanged}/>
        </Row>
        <Row>
          <InputLabel value={"English Speaking:"} style={{minWidth:"212px"}}/>
          <InputLabel value={"Preferred Language:"} style={{minWidth:"212px"}}/>
        </Row>
        <Row>
          <TextInput style={{marginLeft: "12px", width: "200px"}} value={this.props.clientInfo.english_proficiency}
                     onChange={this.onEnglishProficiencyChanged}/>
          <TextInput style={{marginLeft: "12px", width: "200px"}} value={this.props.clientInfo.preferred_language}
                     onChange={this.onPreferredLanguageChanged}/>
        </Row>
      </div>
    );
  }
}

IntakeSurveyContactInfoForm.propTypes = {
  clientInfo: React.PropTypes.object.isRequired,
  goToNextTab: React.PropTypes.func,
  onClientInfoChange: React.PropTypes.func.isRequired
};

IntakeSurveyContactInfoForm.defaultProps = {};
