import React from 'react';
import {Row, Col, Table, Button, ButtonGroup} from "react-bootstrap";
import ShelterStore from "../../stores/ShelterStore";
import ShelterAction from "../../actions/ShelterAction";
import NeedsCategories from "../../constants/Needs";

export default class ServicesPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {needs: NeedsCategories, shelter: null};
    this.handleShelterChange = this.handleShelterChange.bind(this);
  }

  componentWillMount() {
    ShelterAction.fetchAllShelters();
  }

  componentDidMount() {
    ShelterStore.addChangeListener(this.handleShelterChange);
  }

  componentWillUnmount() {
    ShelterStore.removeChangeListener(this.handleShelterChange);
  }

  handleShelterChange() {
    this.setState({shelters: ShelterStore.getState().shelters, availableBeds: ShelterStore.getState().availableBeds});
  }

  render() {
    return (
      <Row>
        <Col xs={11}>
          <Table bordered hover>
            <thead>
            <tr>
              <td>Services</td>
              <td>Actions</td>
            </tr>
            </thead>
            <tbody>
            {
              this.state.needs.map(need => {
                return (
                 <tr key={need.key} needCategory={need.key}>
                   <td>{need.name}</td>
                   <td><ButtonGroup><Button bsStyle="primary">Manage</Button><Button bsStyle="primary">Assign</Button></ButtonGroup></td>
                 </tr>
                );
              })
            }
            </tbody>
          </Table>
        </Col>
      </Row>
    );
  }
}
