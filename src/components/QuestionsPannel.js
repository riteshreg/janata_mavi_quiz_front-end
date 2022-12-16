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
       { <Card sx={{ maxWidth: "86vw", minWidth: "79vw",maxHeight:"100%", backgroundColor:"#fafafa"  }} >
       {showTheReload && <CircularProgress/>}
      
       {!showTheReload&&<><Typography gutterBottom variant="h4" sx={{marginTop:"10px", padding:"6px 3px", color:"#0077B6", fontSize:"2.3vw"}} component="div">
          {`${question}?`}
        </Typography>

      <CardActions >
      <div className="options__container" style={{height:"100%"}}>
       {
        options && options.map((option)=>(
          <button
                disabled={isClicked}
                onClick={() => handleOptionClick(option)}
                key={nanoid()}
                style={{margin:10, maxWidth:"30vw", minWidth:"30vw", minHeight:"8vh"}}
                className={`option ${isClicked && handleAnsChecker(option)}`}
              >
                {option}
              </button>
        ))
       }
       </div>
      </CardActions>
      <Button disabled={!isClicked} sx={{minHeight:"6vh", fontSize:"1vw", marginTop:"2vh"}} onClick={handleNextQuestion} variant="contained">Next Question</Button>
      </>}
    </Card> }
    
      
    </div>
    );
  }
}

export default QuestionPannel;