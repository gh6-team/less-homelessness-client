import React from 'react';
import {Tab, Row, Col, Nav, NavItem} from 'react-bootstrap';

export default class IntakeSurveyPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedKey: this.tabKeys.NAME
    };
    this.onSelectionChanged = this.onSelectionChanged.bind(this);
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

  render() {
    return (
      <div>
        <Row style={{marginLeft: "15px", marginTop: "-30px"}}>
          <h1 style={{color: "green"}}>Entry Information</h1>
        </Row>
        <Tab.Container activeKey={this.state.selectedKey} id="intake-survey" onSelect={this.onSelectionChanged}>
          <Row className="clearfix">
            <Col sm={4}>
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
            <Col sm={8}>
              <Tab.Content animation>
                <Tab.Pane eventKey={this.tabKeys.NAME}>
                  Tab 1 content
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
