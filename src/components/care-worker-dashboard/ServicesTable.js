import React from 'react';
import {Row, Col, Table, Button, ButtonGroup, Tab} from "react-bootstrap";


export default class ServicesTable extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      organizationNeeds: this.props.needs};
  }

  render() {
    return (
      <div>
        <h1>Services</h1>
        <Row>
          <Col xs={11}>
            <Table bordered hover>
              <thead>
              <tr>
                <th>Services</th>
                <th>Actions</th>
              </tr>
              </thead>
              <tbody>
              {
                this.state.organizationNeeds.map(need => {
                  return (
                    <tr key={need.key}>
                      <td>{need.name}</td>
                      <td><ButtonGroup><Button bsStyle="primary" onClick={this.props.selectedItem.bind(this,need)}>Manage</Button><Button
                        bsStyle="primary">Assign</Button></ButtonGroup></td>
                    </tr>
                  );
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
