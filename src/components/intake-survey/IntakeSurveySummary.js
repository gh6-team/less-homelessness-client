import React from 'react';
import {Button, Col, Row} from 'react-bootstrap';
import InputLabel from "../common/InputLabel";
import Needs from "../../constants/Needs";

export default class IntakeSurveySummary extends React.Component {

  constructor(props) {
    super(props);
  }

  calculateDisplayName() {
    let name = this.props.clientInfo.first_name ? this.props.clientInfo.first_name + " " : "";
    name += this.props.clientInfo.middle_name ? this.props.clientInfo.middle_name + " " : "";
    name += this.props.clientInfo.last_name ? this.props.clientInfo.last_name : "";
    return name;
  }

  calculateDisplayLicense() {
    let string = this.props.clientInfo.drivers_license_num;
    string += this.props.clientInfo.drivers_license_territory ? " (" + this.props.clientInfo.drivers_license_territory + ")" : "";
    return string;
  }

  calculateDisplayNeeds() {
    return Needs.filter(need => {
      return this.props.clientInfo.needs.includes(need.key);
    }).map(need => need.name).join(", ");
  }

  render() {
    const showName = this.props.clientInfo.first_name || this.props.clientInfo.middle_name || this.props.clientInfo.last_name;
    const displayName = this.calculateDisplayName();

    const divStyle = {display: "table-row"};
    const textStyle = {verticalAlign: "middle", height: "35px", display: "table-cell"};

    return (
      <div>
        <Row>
          {
            showName ? (
              <div style={divStyle}>
                <InputLabel value="Name: "/><span style={textStyle}>{displayName}</span>
              </div>
            ) : null
          }
        </Row>
        <Row>
          {
            this.props.clientInfo.soc_sec_num ? (
              <div style={divStyle}>
                <InputLabel value="Soc. Sec. Number: "/><span style={textStyle}>{this.props.clientInfo.soc_sec_num}</span>
              </div>
            ) : null
          }
        </Row>
        <Row>
          {
            this.props.clientInfo.drivers_license_num ? (
              <div style={divStyle}>
                <InputLabel value="Driver's License: "/><span style={textStyle}>{this.calculateDisplayLicense()}</span>
              </div>
            ) : null
          }
        </Row>
        <Row>
          {
            this.props.clientInfo.contact_phone ? (
              <div style={divStyle}>
                <InputLabel value="Contact Phone: "/><span style={textStyle}>{this.props.clientInfo.contact_phone}</span>
              </div>
            ) : null
          }
        </Row>
        <Row>
          {
            this.props.clientInfo.contact_email ? (
              <div style={divStyle}>
                <InputLabel value="Contact Email: "/><span style={textStyle}>{this.props.clientInfo.contact_email}</span>
              </div>
            ) : null
          }
        </Row>
        <Row>
          {
            this.props.clientInfo.english_proficiency ? (
              <div style={divStyle}>
                <InputLabel value="English: "/><span style={textStyle}>{this.props.clientInfo.english_proficiency}</span>
              </div>
            ) : null
          }
        </Row>
        <Row>
          {
            this.props.clientInfo.preferred_language ? (
              <div style={divStyle}>
                <InputLabel value="Preferred Language: "/><span style={textStyle}>{this.props.clientInfo.preferred_language}</span>
              </div>
            ) : null
          }
        </Row>
        <Row>
          {
            this.props.clientInfo.gender ? (
              <div style={divStyle}>
                <InputLabel value="Gender: "/><span style={textStyle}>{this.props.clientInfo.gender}</span>
              </div>
            ) : null
          }
        </Row>
        <Row>
          {
            this.props.clientInfo.ethnicity ? (
              <div style={divStyle}>
                <InputLabel value="Ethnicity: "/><span style={textStyle}>{this.props.clientInfo.ethnicity}</span>
              </div>
            ) : null
          }
        </Row>
        <Row>
          {
            this.props.clientInfo.veteran ? (
              <div style={divStyle}>
                <InputLabel value="Veteran: "/><span style={textStyle}>{this.props.clientInfo.veteran}</span>
              </div>
            ) : null
          }
        </Row>
        <Row>
          {
            this.props.clientInfo.date_of_birth ? (
              <div style={divStyle}>
                <InputLabel value="Date of Birth: "/><span style={textStyle}>{this.props.clientInfo.date_of_birth}</span>
              </div>
            ) : null
          }
        </Row>
        <Row>
          {
            this.props.clientInfo.needs.length > 0 ? (
              <div style={divStyle}>
                <InputLabel value="Needs: "/><span style={textStyle}>{this.calculateDisplayNeeds()}</span>
              </div>
            ) : null
          }
        </Row>
        <Row style={{textAlign: "center", marginTop: "15px"}}>
          <Col xs={12}>
            <Button bsStyle="primary" onClick={this.props.submitClient}>Submit</Button>
          </Col>
        </Row>
      </div>
    );
  }
}

IntakeSurveySummary.propTypes = {
  clientInfo: React.PropTypes.object.isRequired,
  submitClient: React.PropTypes.func.isRequired
};

IntakeSurveySummary.defaultProps = {};
