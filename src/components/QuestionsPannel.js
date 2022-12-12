import React from "react";
import { nanoid } from "nanoid";
import CircularProgress from '@mui/material/CircularProgress';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './component_style.css'


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
       { <Card sx={{ maxWidth: 1500, minWidth: 800  }} >
       {showTheReload && <CircularProgress/>}
       {!showTheReload&&<><Typography gutterBottom variant="h3" component="div">
          {`${question}?`}
        </Typography>
      <CardActions >
      <div className="options__container">
       {
        options && options.map((option)=>(
          <button
                disabled={isClicked}
                onClick={() => handleOptionClick(option)}
                key={nanoid()}
                style={{margin:10}}
                className={`option ${isClicked && handleAnsChecker(option)}`}
              >
                {option}
              </button>
        ))
       }
       </div>
      </CardActions>
      <Button disabled={!isClicked} onClick={handleNextQuestion} variant="contained">Next Question</Button>
      </>}
    </Card> }
         {/* {showTheReload && <CircularProgress/>}
      //   <h2 className="question">{question}</h2>
      //   <div className="options__container">
      //     {options &&
      //       options.map((option) => (
      //         <button
      //           disabled={isClicked}
      //           onClick={() => handleOptionClick(option)}
      //           key={nanoid()}
      //           className={`option ${isClicked && handleAnsChecker(option)}`}
      //         >
      //           {option}
      //         </button>
      //       ))}
      //   </div>
      //   <button onClick={handleNextQuestion}>Next Question</button> */}
        
    </div>
    );
  }
}

export default QuestionPannel;