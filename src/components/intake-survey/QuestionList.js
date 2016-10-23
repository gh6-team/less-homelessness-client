import React from 'react';

export default class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: this.props.children,
      stepCount: 0,
      step: this.props.children[0],
    };

    this.nextQuestion = this.nextQuestion.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(!this.state.step) {
      this.setState({
        step: nextProps.children[0]
      });
    }
  }

  nextQuestion() {
    this.setState({
      stepCount: this.state.stepCount + 1
    });
    if (this.state.stepCount < this.state.questions.length) {
      this.setState({
        step: this.state.questions[this.state.stepCount]
      });
      this.render();
    }
  }

  render() {
    if(this.state.step && (typeof this.state.step.setCallback === "function")) {
      this.state.step.setCallback(this.nextQuestion);
    }
    return (
        (this.state.step) ? this.state.step : null
    );
  }
}
