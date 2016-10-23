import React from 'react';
import InputLabel from "../common/InputLabel";
import TextInput from "../common/TextInput";
import {Row} from 'react-bootstrap';

export default class IntakeSurveyNeedsForm extends React.Component {

  constructor(props) {
    super(props);

    this.onFirstNameChanged = this.onFirstNameChanged.bind(this);
    this.onMiddleNameChanged = this.onMiddleNameChanged.bind(this);
    this.onLastNameChanged = this.onLastNameChanged.bind(this);
    this.onSocialSecurityNumberChanged = this.onSocialSecurityNumberChanged.bind(this);
    this.onDriversLicenseNumberChanged = this.onDriversLicenseNumberChanged.bind(this);
    this.onDriversLicenseTerritoryChanged = this.onDriversLicenseTerritoryChanged.bind(this);
  }

  _changeClientNeedInfo(field, value) {
    let clone = JSON.parse(JSON.stringify(this.props.clientInfo));
    if (!clone.needs) {
      clone.needs = [];
    }
    if (value){
      clone.needs.push(field);
    }
    else {
      clone.needs = clone.needs.filter(need => {
        return need !== field;
      });
    }
    this.props.onClientInfoChange(clone);
  }

  onNeedCategoryChanged(needKey, value) {
    this._changeClientNeedInfo(needKey, value);
  }

  render() {
    return (
      <div>
        <Row>
          <InputLabel value={"Service Needs:"} style={{minWidth:"212px"}}/>
        </Row>
        <Row>

        </Row>
      </div>
    );
  }
}

IntakeSurveyNeedsForm.propTypes = {
  clientInfo: React.PropTypes.object.isRequired,
  goToNextTab: React.PropTypes.func,
  onClientInfoChange: React.PropTypes.func.isRequired
};

IntakeSurveyNeedsForm.defaultProps = {};
