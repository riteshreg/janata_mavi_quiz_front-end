import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import QuestionPannel from "../components/QuestionsPannel";
import TextResult from "../components/TextResult";
import "./pages_style.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export class Main extends Component {
  constructor(props) {
    super(props);

    this.props.setScore(0);

    this.state = {
      questions: [],
      question: "",
      category: "",
      currentQuestionIndex: 0,
      options: [],
      isClicked: "",
      goToScore: false,
      showTheReload: true,
    };
  }

  componentDidMount() {
    fetch(`https://janta-mabi-quiz.onrender.com/random_question`)
      .then((response) => {
        response.json().then((result) => {
          this.setState({ questions: result });
          this.setOptionsToState(result);
          this.setState({
            showTheReload: false,
            question: result[this.state.currentQuestionIndex].question,
            category: result[this.state.currentQuestionIndex].category,
          });
        });
      })
      .catch((err) => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentQuestionIndex !== this.state.currentQuestionIndex) {
      
      this.setOptionsToState(this.state.questions);
      this.setState({
        question:
          this.state.questions[this.state.currentQuestionIndex].question,
        category:
          this.state.questions[this.state.currentQuestionIndex].category,
      });

      console.log("component  update");
    }
  }

  UrgeWithPleasureComponent = () => (
    <CountdownCircleTimer
      isPlaying={!this.state.isClicked}
      size={86}
      key={this.state.currentQuestionIndex}
      onComplete={()=>{this.setState({isClicked:true})}}
      duration={20}
      colors={['#05b529', '#F7B801', '#ab0505', '#ab0505']}
      colorsTime={[20,10, 3, 0]}
    >
      {({ remainingTime }) => remainingTime}
    </CountdownCircleTimer>
  )

  setOptionsToState = (questions) => {
    this.setState({
      options: this.shuffledArray([
        questions[this.state.currentQuestionIndex].correctAnswer,
        questions[this.state.currentQuestionIndex].option1,
        questions[this.state.currentQuestionIndex].option2,
        questions[this.state.currentQuestionIndex].option3,
      ]),
    });
  };

  shuffledArray = (items) => {
    return items.sort(() => Math.random() - 0.5);
  };

  handleNextQuestion = () => {
    this.state.questions.length > this.state.currentQuestionIndex + 1
      ? this.setState((state) => ({
          currentQuestionIndex: state.currentQuestionIndex + 1,
        }))
      : this.setState({ goToScore: true });

    this.setState({ isClicked: "" });
  };

  handleOptionClick = (item) => {
    this.setState({ isClicked: item });
    if (
      item ===
      this.state.questions[this.state.currentQuestionIndex].correctAnswer
    ) {
      // this.setState((state) => ({ score: state.score + 1 }));
      this.props.setScore(this.props.score + 1);
    }
  };

  handleAnsChecker = (option) => {
    console.log("handle ans checker answer");
    if (
      option === this.state.isClicked &&
      this.state.isClicked ===
        this.state.questions[this.state.currentQuestionIndex].correctAnswer
    ) {
      return "correctAns";
    } else if (
      option === this.state.isClicked &&
      this.state.isClicked !==
        this.state.questions[this.state.currentQuestionIndex].correctAnswer
    ) {
      return "inCorrectAns";
    } else if (
      option ===
      this.state.questions[this.state.currentQuestionIndex].correctAnswer
    ) {
      return "correctAns";
    }
  };

  render() {
    const { score } = this.props;

    return (
      <div className="main_component_container">
        <div className="main__container">
          {this.state.questions && (
            <TextResult category={this.state.category} score={score} />
          )}
          <div className="question__container">
            {this.state.goToScore && <Navigate to="/score" />}
            {this.state.question &&  this.UrgeWithPleasureComponent()}
            {this.state.questions && (
              <QuestionPannel
                handleNextQuestion={this.handleNextQuestion}
                handleOptionClick={this.handleOptionClick}
                handleAnsChecker={this.handleAnsChecker}
                isClicked={this.state.isClicked}
                options={this.state.options}
                question={this.state.question}
                showTheReload={this.state.showTheReload}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
