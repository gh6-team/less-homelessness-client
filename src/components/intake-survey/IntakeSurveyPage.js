import React from 'react';
import {Tab, Row, Col, Nav, NavItem} from 'react-bootstrap';
import IntakeSurveyNameForm from './IntakeSurveyNameForm';
import IntakeSurveyAction from "../../actions/IntakeSurveyAction";
import IntakeSurveyContactInfoForm from "./IntakeSurveyContactInfoForm";
import IntakeSurveyDemographicsForm from "./IntakeSurveyDemographicsForm";

export default class IntakeSurveyPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedKey: this.tabKeys.NAME,
      clientInfo: {}
    };
    this.onSelectionChanged = this.onSelectionChanged.bind(this);
    this.goToNextTab = this.goToNextTab.bind(this);
    this.onClientInfoChange = this.onClientInfoChange.bind(this);
  }

  tabKeys = {
    NAME: "NAME",
    CONTACT_INFO: "CONTACT_INFO",
    DEMOGRAPHICS: "DEMOGRAPHICS",
    NEEDS: "NEEDS",
    SUBMIT: "SUBMIT"
  };

  onSelectionChanged(selectedKey) {
    this.setState({
      selectedKey
    });
  }

  onClientInfoChange(clientInfo) {
    this.setState({
      clientInfo
    });
  }

  goToNextTab() {
    this.setState({
      selectedKey: this.state.selectedKey + 1
    });
  }

  onSubmitClient() {
    IntakeSurveyAction.saveIntakeSurveyData(this.state.clientInfo);
  }

  render() {
    return (
      <div>
        <Row style={{marginLeft: "15px", marginTop: "-30px"}}>
          <h1 style={{color: "green"}}>Entry Information</h1>
        </Row>
        <Tab.Container activeKey={this.state.selectedKey} id="intake-survey" onSelect={this.onSelectionChanged}>
          <Row className="clearfix">
            <Col xs={3} lg={2} style={{borderRight: "1px grey solid",paddingRight:"0"}}>
              <Nav bsStyle="pills" stacked>
                <NavItem eventKey={this.tabKeys.NAME}>
                  Name & Identification
                </NavItem>
                <NavItem eventKey={this.tabKeys.CONTACT_INFO}>
                  Contact Info
                </NavItem>
                <NavItem eventKey={this.tabKeys.DEMOGRAPHICS}>
                  Demographic Info
                </NavItem>
                <NavItem eventKey={this.tabKeys.NEEDS}>
                  Needs
                </NavItem>
                <NavItem eventKey={this.tabKeys.SUBMIT}>
                  Finish
                </NavItem>
              </Nav>
            </Col>
            <Col xs={9} lg={10}>
              <Tab.Content animation>
                <Tab.Pane eventKey={this.tabKeys.NAME}>
                 <IntakeSurveyNameForm clientInfo={this.state.clientInfo} goToNextTab={this.goToNextTab} onClientInfoChange={this.onClientInfoChange} />
                </Tab.Pane>
                <Tab.Pane eventKey={this.tabKeys.CONTACT_INFO}>
                  <IntakeSurveyContactInfoForm clientInfo={this.state.clientInfo} goToNextTab={this.goToNextTab} onClientInfoChange={this.onClientInfoChange} />
                </Tab.Pane>
                <Tab.Pane eventKey={this.tabKeys.DEMOGRAPHICS}>
                  <IntakeSurveyDemographicsForm clientInfo={this.state.clientInfo} goToNextTab={this.goToNextTab} onClientInfoChange={this.onClientInfoChange} />
                </Tab.Pane>
                <Tab.Pane eventKey={this.tabKeys.NEEDS}>
                  Tab 1 content
                </Tab.Pane>
                <Tab.Pane eventKey={this.tabKeys.SUBMIT}>
                  Tab 2 content
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }

}
