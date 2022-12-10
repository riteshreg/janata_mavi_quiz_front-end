import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import QuestionPannel from "../components/QuestionsPannel";
import TextResult from "../components/TextResult";

export class Main extends Component {
  constructor(props) {
    
    super(props);
    this.state = {
      questions: [],
      question: "",
      category:"",
      currentQuestionIndex: 0,
      options: [],
      isClicked: "",
      score: 0,
      goToScore:false
    };
  }

  componentDidMount() {
    fetch(`https://janta-mabi-quiz.onrender.com/random_question`)
      .then((response) => {
        response.json().then((result) => {
          this.setState({ questions: result });
          this.setOptionsToState(result);
          this.setState({
            question: result[this.state.currentQuestionIndex].question,
            category: result[this.state.currentQuestionIndex].category
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
          category: this.state.questions[this.state.currentQuestionIndex].category
      });

      console.log("component  update");
    }
  }

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
    
    this.state.questions.length>this.state.currentQuestionIndex+1 ? this.setState((state) => ({
      currentQuestionIndex: state.currentQuestionIndex + 1
    })): this.setState({goToScore:true})
    this.setState({ isClicked: "" });

   
  };

  handleOptionClick = (item) => {
    this.setState({ isClicked: item });
    if (
      item ===
      this.state.questions[this.state.currentQuestionIndex].correctAnswer
    ) {
      // this.setState((state) => ({ score: state.score + 1 }));
      this.props.setScore(this.props.score+1)
    }
  };

  handleAnsChecker = (option) => {
    console.log("handle ans checker answer");
    if (
      option === this.state.isClicked &&
      this.state.isClicked ===
        this.state.questions[this.state.currentQuestionIndex].correctAnswer
    ) {
      console.log("right answer");
      return "correctAns";
    } else if (
      option === this.state.isClicked &&
      this.state.isClicked !==
        this.state.questions[this.state.currentQuestionIndex].correctAnswer
    ) {
      console.log("wrong answer");
      return "inCorrectAns";
    } else if (
      option ===
      this.state.questions[this.state.currentQuestionIndex].correctAnswer
    ) {
      console.log("last  answer");
      return "correctAns";
    }
  };


  render() {
   
    const {score} = this.props

    return (
      <div className="main__container">
       {this.state.questions &&  <TextResult  
        category={this.state.category}
        score={score} />}
        <div className="question__container">
          {this.state.goToScore && <Navigate 
           to="/score"/>}
          {this.state.questions && (
            <QuestionPannel
              handleNextQuestion={this.handleNextQuestion}
              handleOptionClick={this.handleOptionClick}
              handleAnsChecker={this.handleAnsChecker}
              isClicked={this.state.isClicked}
              options={this.state.options}
              question={this.state.question}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Main;
