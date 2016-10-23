import React from 'react';
import {Tab, Row, Col, Nav, NavItem} from 'react-bootstrap';
import {browserHistory} from 'react-router';
import ClientList from '../client-details/ClientListPage';
import ClientDetails from '../client-details/ClientDetailPage';
import IntakeSurvey from "../intake-survey/IntakeSurveyPage";
import Services from "./ServicesPage";

export default class IntakeSurveyPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedKey: this.tabKeys.NAME,
      selectedClientId: null,
      clientInfo: {}
    };
    this.onSelectionChanged = this.onSelectionChanged.bind(this);
    this.handleClientSelected = this.handleClientSelected.bind(this);
    this.handleClientDeselected = this.handleClientDeselected.bind(this);
  }

  tabKeys = {
    CLIENT_SEARCH: "CLIENT_SEARCH",
    BASIC_INTAKE:"BASIC_INTAKE",
    SPDAT: "SPDAT",
    SPDAT_REVIEW: "SPDAT_REVIEW",
    FIND_A_BED: "FIND_A_BED",
    MANAGE_SERVICES: "MANAGE_SERVICES"
  };

  onSelectionChanged(selectedKey) {
    this.setState({
      selectedKey,
      selectedClientId: null
    });
    switch (selectedKey) {
      case "FIND_A_BED":
        browserHistory.push("/map");
            break;
      case "CLIENT_SEARCH":
        this.handleClientDeselected();
        break;
    }
  }

  handleClientSelected(clientId) {
    if (clientId !== this.state.selectedClientId) {
      this.setState({
        selectedClientId: clientId
      });
    }
  }

  handleClientDeselected() {
    this.setState({
      selectedClientId: null
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
            <Col xs={3} lg={2} style={{borderRight: "1px grey solid", paddingRight:"0"}}>
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
                <NavItem eventKey={this.tabKeys.MANAGE_SERVICES}>
                  Manage Services
                </NavItem>
              </Nav>
            </Col>
            <Col xs={9} lg={10}>
              <Tab.Content animation>
                <Tab.Pane eventKey={this.tabKeys.CLIENT_SEARCH}>
                  {
                    (this.state.selectedClientId) ?
                      <ClientDetails clientId={this.state.selectedClientId} onClientDeselected={this.handleClientDeselected} />
                      :
                      <ClientList onClientSelected={this.handleClientSelected}/>
                  }
                </Tab.Pane>
                <Tab.Pane eventKey={this.tabKeys.BASIC_INTAKE}>
                  <div style={{paddingTop:"20px"}}>
                    <IntakeSurvey/>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey={this.tabKeys.SPDAT}>
                  Tab 1 content
                </Tab.Pane>
                <Tab.Pane eventKey={this.tabKeys.SPDAT_REVIEW}>
                  Tab 2 content
                </Tab.Pane>
                <Tab.Pane eventKey={this.tabKeys.MANAGE_SERVICES}>
                  <Services/>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }

}
