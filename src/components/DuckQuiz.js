import React from "react";

class DuckQuiz extends React.Component {
  componentDidMount() {
    this.props.fetchQuestion();
  }

  render() {
    // if (!this.props.question) return null;
    return (
      <div>
        {this.props.question.map(item => {
          return (
            <div>
              <h2 className="question">
                Question : {decodeURIComponent(item.question)}
              </h2>
              <p className="question__category">
                Category(s) : {decodeURIComponent(item.category)}
              </p>
              <ul className="question__answers">
                <li>
                  {decodeURIComponent(item.correct_answer)}
                  <button
                    onClick={score => this.props.handleScore(score)}
                    className="button__correct"
                  >
                    Try me
                  </button>
                </li>
                <p />
                <li>
                  {decodeURIComponent(item.incorrect_answers[0])}
                  <button
                    onClick={score => this.props.handleWrong(score)}
                    className="button__incorrect"
                  >
                    Try me
                  </button>
                </li>
                <p />
                <li>
                  {decodeURIComponent(item.incorrect_answers[1])}
                  <button
                    onClick={score => this.props.handleWrong(score)}
                    className="button__incorrect"
                  >
                    Try me
                  </button>
                </li>
                <p />
                <li>
                  {decodeURIComponent(item.incorrect_answers[2])}
                  <button
                    onClick={score => this.props.handleWrong(score)}
                    className="button__incorrect"
                  >
                    Try me
                  </button>
                </li>
              </ul>
            </div>
          );
        })}
        <div className="score__container">
          <p> Your Current Score :</p>
          <h3 className="score">{this.props.duckScore}</h3>
        </div>
        <div className="lives__container">
          <p> Lives Remaining :</p>
          <h3 className="lives">{this.props.wrongDuck}/3</h3>
        </div>
      </div>
    );
  }
}

export default DuckQuiz;
