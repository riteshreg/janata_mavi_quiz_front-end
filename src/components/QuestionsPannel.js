import React from "react";
import { nanoid } from "nanoid";

class QuestionPannel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      isClicked,
      handleOptionClick,
      handleAnsChecker,
      handleNextQuestion,
      question,
      options,
    } = this.props;

    return (
      <div className="question_pannel__container">
        <h2 className="question">{question}</h2>
        <div className="options__container">
          {options &&
            options.map((option) => (
              <button
                disabled={isClicked}
                onClick={() => handleOptionClick(option)}
                key={nanoid()}
                className={`option ${isClicked && handleAnsChecker(option)}`}
              >
                {option}
              </button>
            ))}
        </div>
        <button onClick={handleNextQuestion}>Next Question</button>
      </div>
    );
  }
}

export default QuestionPannel;