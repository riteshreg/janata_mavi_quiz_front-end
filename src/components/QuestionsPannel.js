import React from "react";
import { nanoid } from "nanoid";
import CircularProgress from '@mui/material/CircularProgress';


class QuestionPannel extends React.Component {
  

  render() {
    const {
      isClicked,
      handleOptionClick,
      handleAnsChecker,
      handleNextQuestion,
      question,
      options,
      showTheReload
    } = this.props;

    return (
      <div className="question_pannel__container">
          {showTheReload && <CircularProgress/>}
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