import React from 'react';
import {Tab, Row, Col, Nav, NavItem} from 'react-bootstrap';
import IntakeSurveyNameForm from './IntakeSurveyNameForm';

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
    GENDER: "GENDER",
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

  render() {
    return (
      <div>
        <Row style={{marginLeft: "15px", marginTop: "-30px"}}>
          <h1 style={{color: "green"}}>Entry Information</h1>
        </Row>
        <Tab.Container activeKey={this.state.selectedKey} id="intake-survey" onSelect={this.onSelectionChanged}>
          <Row className="clearfix">
            <Col sm={4} lg={2} style={{borderRight: "1px grey solid"}}>
              <Nav bsStyle="pills" stacked>
                <NavItem eventKey={this.tabKeys.NAME}>
                  Name
                </NavItem>
                <NavItem eventKey={this.tabKeys.CONTACT_INFO}>
                  Contact Info
                </NavItem>
                <NavItem eventKey={this.tabKeys.GENDER}>
                  Gender
                </NavItem>
                <NavItem eventKey={this.tabKeys.NEEDS}>
                  Needs
                </NavItem>
                <NavItem eventKey={this.tabKeys.SUBMIT}>
                  Finish
                </NavItem>
              </Nav>
            </Col>
            <Col sm={8} lg={10}>
              <Tab.Content animation>
                <Tab.Pane eventKey={this.tabKeys.NAME}>
                 <IntakeSurveyNameForm clientInfo={this.state.clientInfo} goToNextTab={this.goToNextTab} onClientInfoChanged={this.onClientInfoChange}/>
                </Tab.Pane>
                <Tab.Pane eventKey={this.tabKeys.CONTACT_INFO}>
                  Tab 1 content
                </Tab.Pane>
                <Tab.Pane eventKey={this.tabKeys.GENDER}>
                  Tab 2 content
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
