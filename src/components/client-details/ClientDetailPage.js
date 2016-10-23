import React from 'react';
import {Row, Col, Table, Well} from "react-bootstrap";
import ClientStore from "../../stores/ClientStore";
import ClientAction from "../../actions/ClientAction";
import TextInput from "../common/TextInput";

export default class ClientDetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      client: null,
      spdat: NaN
    };
    this.handleClientChange = this.handleClientChange.bind(this);
  }

  componentWillMount() {
    ClientAction.fetchClientById(this.props.clientId);
    ClientAction.fetchClientSpdatById(this.props.clientId);
  }

  componentDidMount() {
    ClientStore.addChangeListener(this.handleClientChange);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.clientId == null) {
      this.setState({client: null, spdat: NaN});
    }
    else if (this.props.clientId !== nextProps.clientId) {
      ClientAction.fetchClientById(nextProps.clientId);
      ClientAction.fetchClientSpdatById(this.props.clientId);
    }
  }

  componentWillUnmount() {
    ClientStore.removeChangeListener(this.handleClientChange);
  }

  handleClientChange() {
    this.setState({
      client: ClientStore.getState().client,
      spdat: ClientStore.getState().spdat
    });
  }

  render() {

    let clientDetails = [];
    if (this.state.client) {
      for (let clientProperty in this.state.client) {
        let readableProperty = clientProperty.split("_").join(" ");
        let detailsProperty = this.state.client[clientProperty];
        if ((typeof detailsProperty === "string" || typeof  detailsProperty === "number" || typeof detailsProperty === "boolean")) {
          clientDetails.push([readableProperty, detailsProperty.toString()]);
        }
      }
    }

    return (
      <div>
        <h1>Client Details</h1>
        <Row style={{fontSize:"1.35em", paddingTop:"5px"}}>
          <Col xs={6} sm={3} style={{textAlign: "right"}}>First Name</Col>
          <Col xs={6} sm={3}
               style={{fontWeight: "bold"}}>{(this.state.client) ? this.state.client.first_name : null}</Col>
        </Row>
        <Row style={{fontSize:"1.35em", paddingTop:"5px", paddingBottom:"5px"}}>
          <Col xs={6} md={3} style={{textAlign: "right"}}>Last Name</Col>
          <Col xs={6} md={3}
               style={{fontWeight: "bold"}}>{(this.state.client) ? this.state.client.last_name : null}</Col>
        </Row>
        <Row style={{paddingTop:"5px"}}>
          <Col xs={12} sm={6}>
            <Table striped bordered condensed hover style={{border: "1px solid #5a6f96", boxShadow:"2px 2px 8px rgba(0,0,0,0.25)"}}>
              <tbody>
              {
                clientDetails.map((currentDetails) => {
                  return (<tr key={currentDetails[0]}>
                    <td style={{width: "50%", textAlign: "right", padding:"5px", textTransform:"capitalize"}}>
                      <div style={{padding:"5px"}}>{currentDetails[0]}</div>
                    </td>
                    <td style={{width: "50%",  padding:"5px"}}>
                      {
                        (currentDetails[0] === "id") ?
                          <div style={{padding:"5px"}}>{currentDetails[1]}</div>
                          :
                          <TextInput value={currentDetails[1]} style={{padding:"5px"}} />
                      }

                    </td>
                  </tr>);
                })
              }
              </tbody>
            </Table>
          </Col>
          <Col xs={5} sm={3}>
            {
              (this.state.spdat >= 0) ?
                <Well style={{textAlign:"center", textShadow:"1px 1px 1px rgba(0,0,0,0.5)", boxShadow:"2px 2px 8px rgba(0,0,0,0.25)", color:"white", backgroundColor:"forestgreen"}}>
                  <h3>SPDAT</h3><br/>
                  <div style={{fontSize:"2.5em", fontWeight:"bold", paddingBottom:"5px"}}>
                    {this.state.spdat}
                  </div>
                </Well>
                :
                null
            }
            </Col>
        </Row>

      </div>
    );
  }
}

ClientDetailPage.propTypes = {
  clientId: React.PropTypes.number.isRequired,
  onClientDeselected: React.PropTypes.func
};

ClientDetailPage.DefaultProps = {};
