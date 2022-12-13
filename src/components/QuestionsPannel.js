import React from "react";
import { nanoid } from "nanoid";
import CircularProgress from '@mui/material/CircularProgress';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
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
       {!showTheReload&&<><Typography gutterBottom variant="h4" component="div">
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
    
      
    </div>
    );
  }
}

export default QuestionPannel;