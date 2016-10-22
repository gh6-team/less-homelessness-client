import React from 'react';
import {Row, Col, Table} from "react-bootstrap";
import ClientStore from "../stores/ClientStore";
import ClientAction from "../actions/ClientAction";

export default class ClientDetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {client:null};
    this.handleClientChange = this.handleClientChange.bind(this);
  }

  componentWillMount() {
    ClientAction.fetchClientById(this.props.clientId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.clientId == null) {
      this.setState({client:null});
    }
    else if (this.props.client.id !== nextProps.clientId) {
      ClientAction.fetchClientById(nextProps.clientId);
    }
  }

  componentDidMount() {
    ClientStore.addChangeListener(this.handleClientChange);
  }

  componentWillUnmount() {
    ClientStore.removeChangeListener(this.handleClientChange);
  }

  handleClientChange() {
    console.log("handling client change", ClientStore.getState().client);
    this.setState({client:ClientStore.getState().client});
  }

  render() {
    return (
      <div>
        <h1>Client Details</h1>
        <Row>
          <Col xs={6} md={3}>First Name</Col>
          <Col xs={6} md={3}>{(this.state.client) ? this.state.client.first_name : null}</Col>
          <Col xs={6} md={3}>Last Name</Col>
          <Col xs={6} md={3}>TEST</Col>
        </Row>
        <Table striped bordered condensed hover>
          <tbody>
          <tr>
            <td>First Name</td>
            <td>{(this.state.client) ? this.state.client.first_name : null}</td>
          </tr>

          </tbody>
        </Table>
      </div>
    );
  }
}
