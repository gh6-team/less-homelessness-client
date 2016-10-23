import React from 'react';
import InputLabel from "../common/InputLabel";
import {Row} from 'react-bootstrap';
import Needs from "../../constants/Needs";
import NeedButton from "./NeedButton";

export default class IntakeSurveyNeedsForm extends React.Component {

  constructor(props) {
    super(props);

    this.onNeedCategoryChanged = this.onNeedCategoryChanged.bind(this);
  }

  _changeClientNeedInfo(field, value) {
    let clone = JSON.parse(JSON.stringify(this.props.clientInfo));
    if (value) {
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
          <InputLabel value={"Service Needs:"} style={{minWidth: "212px"}}/>
        </Row>
        <Row>
          {
            Needs.map(need => {
              const matchingNeeds = this.props.clientInfo.needs.filter(needProperty => {
                return (need.key === needProperty);
              });
              const currentValue = (matchingNeeds.length !== 0);
              return (
                <NeedButton key={need.key}
                            onNeedCategoryChanged={this.onNeedCategoryChanged}
                            value={currentValue}
                            needCategory={need.key}
                            title={need.name}/>
              );
            })
          }
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
