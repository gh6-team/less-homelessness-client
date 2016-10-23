import React from 'react';
import {Row, Col, Table, Button, ButtonGroup} from "react-bootstrap";


export default class ServicesTable extends React.Component {

  static propTypes = {
    organizationNeeds: React.PropTypes.array,
    onSelect: React.PropTypes.func
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Services</h1>
        <Row>
          <Col xs={11}>
            <Table striped bordered hover>
              <thead>
              <tr>
                <th>Services</th>
                <th>Actions</th>
              </tr>
              </thead>
              <tbody>
              {
                Array.isArray(this.props.organizationNeeds) ?
                this.props.organizationNeeds.map(need => {
                  return (
                    <tr key={need.id}>
                      <td>{need.service}</td>
                      <td><ButtonGroup><Button bsStyle="primary" onClick={this.props.onSelect.bind(this,need)}>Manage</Button><Button
                        bsStyle="primary" disabled>Assign</Button></ButtonGroup></td>
                    </tr>
                  );
                }) : null
              }
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    );
  }
}
