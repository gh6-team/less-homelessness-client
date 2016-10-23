import React from 'react';
import {Tab, Row, Col, Nav, NavItem} from 'react-bootstrap';
import ClientList from '../client-details/ClientListPage';
import ShelterMap from "../map/ShelterMapPage";
import IntakeSurvey from "../intake-survey/IntakeSurveyPage";

export default class IntakeSurveyPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedKey: this.tabKeys.NAME,
      clientInfo: {}
    };
    this.onSelectionChanged = this.onSelectionChanged.bind(this);
  }

  tabKeys = {
    CLIENT_SEARCH: "CLIENT_SEARCH",
    BASIC_INTAKE:"BASIC_INTAKE",
    SPDAT: "SPDAT",
    SPDAT_REVIEW: "SPDAT_REVIEW",
    FIND_A_BED: "FIND_A_BED"
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
          <h1 style={{color: "green"}}>Care Worker Dashboard</h1>
        </Row>
        <Tab.Container activeKey={this.state.selectedKey} id="care-worker-dashboard" onSelect={this.onSelectionChanged}>
          <Row className="clearfix">
            <Col xs={3} lg={2} style={{borderRight: "1px grey solid"}}>
              <Nav bsStyle="pills" stacked>
                <NavItem eventKey={this.tabKeys.CLIENT_SEARCH}>
                  Client Search
                </NavItem>
                <NavItem eventKey={this.tabKeys.BASIC_INTAKE}>
                  Basic Intake
                </NavItem>
                <NavItem eventKey={this.tabKeys.SPDAT}>
                  SPDAT
                </NavItem>
                <NavItem eventKey={this.tabKeys.SPDAT_REVIEW}>
                  SPDAT Review
                </NavItem>
                <NavItem eventKey={this.tabKeys.FIND_A_BED}>
                  Shelters Map
                </NavItem>
              </Nav>
            </Col>
            <Col xs={9} lg={10}>
              <Tab.Content animation>
                <Tab.Pane eventKey={this.tabKeys.CLIENT_SEARCH}>
                  <ClientList/>
                </Tab.Pane>
                <Tab.Pane eventKey={this.tabKeys.BASIC_INTAKE}>
                  <IntakeSurvey/>
                </Tab.Pane>
                <Tab.Pane eventKey={this.tabKeys.SPDAT}>
                  Tab 1 content
                </Tab.Pane>
                <Tab.Pane eventKey={this.tabKeys.SPDAT_REVIEW}>
                  Tab 2 content
                </Tab.Pane>
                <Tab.Pane eventKey={this.tabKeys.FIND_A_BED}>
                  <ShelterMap/>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }

}