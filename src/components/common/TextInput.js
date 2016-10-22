import React, {PropTypes} from 'react';

export default class TextInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: (this.props.value) ? this.props.value : ""
    };
  }

  _handleChange(event) {
    event.stopPropagation();
    const newValue = event.target.value;
    this.setState({
      value: newValue
    });
    if (typeof this.props.onChange === "function") {
      this.props.onChange(newValue);
    }
  }

  render() {
    const inputStyle = {padding:"5px"};
    const errorStyle = (this.props.error) ? {border:"1px solid red"} : {};
    const appliedStyle = Object.assign(inputStyle, this.props.style, errorStyle);
    return (
      <span>
        <input type={this.props.type}
             autoComplete="false"
             disabled={this.props.disabled}
             onBlur={this.props.onBlur}
             onChange={this._handleChange.bind(this)}
             onKeyUp={this.props.onKeyUp}
             onKeyPress={this.props.onKeyPress}
             style={appliedStyle}
             value={this.state.value}
             placeholder={this.props.placeholder}
        />
        {
          (this.props.error) ?
            <div style={{color:"red"}}>{this.props.error}</div>
            :
            null
        }
        </span>
    );
  }

}

TextInput.propTypes  = {
  type: PropTypes.string,
  autoComplete: PropTypes.bool,
  disabled: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func,
  onKeyPress: PropTypes.func,
  style: PropTypes.object,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string
};

TextInput.defaultProps = {
  type: "text",
  autoComplete: false,
  disabled: false,
  onBlur: null,
  onChange: null,
  onKeyUp: null,
  onKeyPress: null,
  style: null,
  value: "",
  placeholder: null,
  error: null
};
