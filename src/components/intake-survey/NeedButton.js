import React from 'react';
import { Button, Col } from 'react-bootstrap';

export default class NeedButton extends React.Component {

  constructor(props) {
    super(props);

    this.onButtonToggled = this.onButtonToggled.bind(this);
  }

  onButtonToggled() {
    this.props.onNeedCategoryChanged(this.props.needCategory, !this.props.value);
  }

  render() {
    return (
      <Col xs={6} sm={4} lg={3}>
        <Button onClick={this.onButtonToggled}
                style={{width: "200px", marginBottom:"10px"}}
                bsStyle={this.props.value ? "primary" : "success"}>
          {this.props.title}
        </Button>
      </Col>
    );
  }
}

NeedButton.propTypes = {
  onNeedCategoryChanged: React.PropTypes.func.isRequired,
  needCategory: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  value: React.PropTypes.bool.isRequired
};

NeedButton.defaultProps = {
};
