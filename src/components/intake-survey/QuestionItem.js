import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import TextInput from '../common/TextInput';

export default class QuestionItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      callback: null,
      response: null,
      prequestion: null,
      question: null,
      type: null,
      options: []
    };
    this.setData = this.setData.bind(this);
    this.setCallback = this.setCallback.bind(this);
    this.updateResponse = this.updateResponse.bind(this);

  }
  setData(json) {
    this.setState({
      prequestion: (json.pre_q ? json.pre_q : null),
      question: (json.question ? json.question : null),
      type: (json.type ? json.type : null)
    });

    let arr = [];
    if (json.options) {
      json.options.forEach((val) => {
        arr.push(val);
      });
      this.setState({
        options: arr
      });
    }
  }

  setCallback(callback) {
    this.setState({
      callback: callback
    });
  }

  updateResponse(value) {
    this.setState({
      response: value
    });
    this.state.callback();
  }

  render() {
    let responseTag = (() => {
      if (this.state.type == "text")
        return (<div>
            <TextInput value={this.state.response}/>
            <Button onClick={()=>this.updateResponse(this.state.response)}>Next</Button>
          </div>
        );
      else if (this.state.type == "YN") {
        return (<Row>
            <Col>
              <Button id="yesButton" onClick={()=>this.updateResponse("yes")}>Yes</Button>
            </Col>
            <Col>
              <Button id="noButton" onClick={()=>this.updateResponse("no")}>No</Button>
            </Col>
            <Col>
              <Button id="refuseButton" onClick={()=>this.updateResponse("refuse")}>No answer</Button>
            </Col>
          </Row>);
      }
      else if (this.state.type == "list")
        return (<div>
            {
              (() => {
                let arr = [];
                if (this.state.options) {
                  this.state.options.forEach((val, index) => {
                    arr.push(
                      <Row>
                        <Col><input id={'option' + index} type="radio" onClick={()=>this.updateResponse(val)}/></Col>
                        <Col><label htmlFor={'option' + index}>{val}</label></Col>
                      </Row>);
                  });
                  return arr;
                }
              })
            }
          </div>);
    });

    return (
      <div>
        {
          (this.state.prequestion) &&
          <Row>
            <Col xs={10} style={{fontWeight:'bold'}} colSpan="100%">
              {this.state.prequestion}
            </Col>
          </Row>
        },
        <Row>
          <Col xs={10} colSpan="100%">
            {this.state.question}
          </Col>
        </Row>
        {responseTag}
      </div>
    );
  }
}
