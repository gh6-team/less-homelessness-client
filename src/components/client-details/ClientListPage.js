import React from 'react';
import {Row, Col, Table} from "react-bootstrap";
import ClientStore from "../../stores/ClientStore";
import ClientAction from "../../actions/ClientAction";

export default class ClientListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clients: null};
    this.handleClientChange = this.handleClientChange.bind(this);
    this.handleClientSelection = this.handleClientSelection.bind(this);
  }

  componentWillMount() {
    ClientAction.fetchClientList();
  }

  componentDidMount() {
    ClientStore.addChangeListener(this.handleClientChange);
  }

  componentWillReceiveProps() {
    ClientAction.fetchClientList();
  }

  componentWillUnmount() {
    ClientStore.removeChangeListener(this.handleClientChange);
  }

  handleClientChange() {
    this.setState({clients: ClientStore.getState().clients});
  }

  handleClientSelection(clientId) {
    if(typeof this.props.onClientSelected === "function") {
      this.props.onClientSelected(clientId);
    }
  }

  render() {
    let clientList = (this.state.clients) ? this.state.clients : [];
    return (
      <div>
        <h1 style={{marginTop: "0"}}>Client List</h1>
        <Row>
          <Col xs={12} sm={6}>
            <p>Select a client by name to check details:</p>
          </Col>
        </Row>
        <Row style={{paddingTop: "5px"}}>
          <Col xs={12} sm={6}>
            <Table striped bordered condensed hover
                   style={{border: "1px solid #5a6f96", boxShadow: "2px 2px 8px rgba(0,0,0,0.25)"}}>
              <tbody>
              {
                clientList.map((currentClient) => {
                  return (<tr key={currentClient.id} onClick={this.handleClientSelection.bind(this,currentClient.id)}>
                    <td style={{padding: "5px", cursor:"pointer"}}>
                      <div style={{padding: "5px"}}>
                        {currentClient.first_name + " " + currentClient.middle_name + " " + currentClient.last_name}
                      </div>
                    </td>
                  </tr>);
                })
              }
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>

    );
  }
}

ClientListPage.propTypes = {
  onClientSelected: React.PropTypes.func
};

ClientListPage.defaultProps = {
  onClientSelected: null
};
