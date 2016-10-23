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
    this.state.step.setCallback(this.nextQuestion);
    return (
      <div>
        {this.state.step.render()}
      </div>
    );
  }
}
