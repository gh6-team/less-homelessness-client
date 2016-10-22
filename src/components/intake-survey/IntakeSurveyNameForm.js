import React from 'react';
import InputLabel from "../common/InputLabel";
import TextInput from "../common/TextInput";
import {Row} from 'react-bootstrap';

export default class IntakeSurveyNamePage extends React.Component {

  constructor(props) {
    super(props);
  }

  onNameChanged(value) {
    let clone = JSON.parse(JSON.stringify(this.props.clientInfo));
    clone.clientName = value;
    this.props.onClientInfoChange(clone);
  }

  render() {
    return (
      <div>
        <Row>
          <InputLabel value={"Name:"}/>
        </Row>
        <Row>
          <TextInput style={{marginLeft: "12px", width: "200px"}} value={this.props.clientInfo.clientName} onChange={this.onNameChanged}/>
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
