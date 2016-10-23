import React from 'react';
import {Row} from 'react-bootstrap';

export default class IntakeSurveySummary extends React.Component {

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
        <Row/>
      </div>
    );
  }
}

IntakeSurveySummary.propTypes = {
  clientInfo: React.PropTypes.object.isRequired,
  onSubmitClient: React.PropTypes.func.isRequired
};

IntakeSurveySummary.defaultProps = {};
