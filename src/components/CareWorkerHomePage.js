import React from 'react';
import {Row, Col, Button, ButtonGroup} from "react-bootstrap";
import DropdownList from "react-widgets/lib/DropdownList";
import ClientDetailPage from "./client-details/ClientDetailPage";

export default class CareWorkerHomePage extends React.Component {

  constructor(props) {
    super(props);
  }

  buttons = [
    "SPDAT",
    "Review Intake",
    "Client Search",
    "Find a Shelter Bed"
  ];

  render() {

    const style = {
      width: "250px",
      padding: "1px 12px"
    };

    return (
      <div>
        <Row>
          <Col sm={3} xsHidden >
            <ButtonGroup vertical>
              <Button onClick={() => {}}>SPDAT</Button>
              <Button onClick={() => {}}>Review Intake</Button>
              <Button onClick={() => {}}>Client Search</Button>
              <Button onClick={() => {}}>Find a Shelter Bed</Button>
            </ButtonGroup>
          </Col>
          <Col sm={9} xsHidden>
            <ClientDetailPage clientId={90077}/>
          </Col>
          <Col xs={2} smHidden mdHidden lgHidden>
            <DropdownList style={style}
                          data={this.buttons} />
          </Col>
        </Row>
      </div>
    );
  }

}
