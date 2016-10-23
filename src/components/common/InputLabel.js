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
    const mergedStyle = Object.assign({}, this.props.style, style);
    return (
      <div style={mergedStyle} >{this.props.value}</div>
    );
  }
}

InputLabel.propTypes = {
  style: PropTypes.object,
  value: PropTypes.string
};

InputLabel.defaultProps = {
};
