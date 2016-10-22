import React, { PropTypes } from 'react';
import CommonStyling from "./CommonStyling";

export default class InputLabel extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const style = {
      height: CommonStyling.InputFieldHeight,
      display: "table-cell",
      padding: "1px 12px",
      verticalAlign: "middle"
    };
    return (
      <div style={style} >{this.props.value}</div>
    );
  }
}

InputLabel.propTypes = {
  value: PropTypes.string
};

InputLabel.defaultProps = {
};
