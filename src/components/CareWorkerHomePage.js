import React from 'react';
import {Row, Col, Button, ButtonGroup} from "react-bootstrap";
import {browserHistory} from "react-router";
import DropdownList from "react-widgets/lib/DropdownList";
import ClientDetail from "./ClientDetail";

export default class CareWorkerHomePage extends React.Component {

  constructor(props) {
    super(props);
  }

  onLoginClicked() {
    browserHistory.push("/login");
  }

  onIntakeClicked() {
    browserHistory.push("/intake");
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
              <Button onClick={this.onIntakeClicked}>SPDAT</Button>
              <Button onClick={this.onIntakeClicked}>Review Intake</Button>
              <Button onClick={this.onIntakeClicked}>Client Search</Button>
              <Button onClick={this.onIntakeClicked}>Find a Shelter Bed</Button>
            </ButtonGroup>
          </Col>
          <Col sm={9} xsHidden>
            <ClientDetail clientId={90077}/>
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
