import { Alert, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "./pages_style.css";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const [formData, setFormData] = useState({
    question: "",
    correctAnswer: "",
    option1: "",
    option2: "",
    option3: "",
  });

  const params = useParams();
  const Navigate = useNavigate();

  const [progress, setProgress] = useState(false);
  const [firstRenderProgress, setFirstRenderProgress] = useState(false);
  const [emptyErr, setEmptyErr] = useState(false);


  if(!params.id){
    Navigate('/admin')
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    setFirstRenderProgress(true)
    fetch(
      `https://janta-mabi-quiz.onrender.com/get_data_for_update/${params.id}`
    ).then((response) => {
      response.json().then((result) => {
        setFormData({
          question: result.question,
          correctAnswer: result.correctAnswer,
          option1: result.option1,
          option2: result.option2,
          option3: result.option3,
        });
        setFirstRenderProgress(false)
      });
    });
  },[]);

  const handleAddQuestion = () => {
    if (
      !formData.question ||
      !formData.correctAnswer ||
      !formData.option1 ||
      !formData.option2 ||
      !formData.option3
    ) {
      setEmptyErr(true);
    } else {
      setEmptyErr(false);
      setProgress(true);
      fetch(`https://janta-mabi-quiz.onrender.com/update/${params.id}`, {
        method: "put",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "Application/json",
        },
      }).then((response) => {
        response.json().then((result) => {
          setProgress(false);

          Navigate("/admin");
        });
      });
    }
  };

  return (
    <div className="main_div_update">
    {firstRenderProgress  && <Box sx={{ width: '100%'}}>
      <LinearProgress sx={{height:"6px"}} /> 
      </Box>}
 
    <div className="login-form_container add_main_container ">
      {!firstRenderProgress && (
        <div className="add_question_container">
          <h4>Add your Question</h4>
          <TextField
            style={{ margin: "10px" }}
            id="filled-basic"
            name="question"
            className="add_question_form"
            value={formData.question}
            onChange={handleChange}
            label="quesitons"
            variant="outlined"
          />
          <TextField
            style={{ margin: "10px" }}
            id="filled-basic"
            name="correctAnswer"
            className="add_question_form"
            value={formData.correctAnswer}
            onChange={handleChange}
            label="answer"
            variant="outlined"
          />
          <TextField
            style={{ margin: "10px" }}
            id="filled-basic"
            name="option1"
            className="add_question_form"
            value={formData.option1}
            onChange={handleChange}
            label="incorrect option"
            variant="outlined"
          />
          <TextField
            style={{ margin: "10px" }}
            id="filled-basic"
            name="option2"
            className="add_question_form"
            onChange={handleChange}
            value={formData.option2}
            label="incorrect option"
            variant="outlined"
          />
          <TextField
            style={{ margin: "10px" }}
            id="filled-basic"
            name="option3"
            className="add_question_form"
            value={formData.option3}
            onChange={handleChange}
            label="incorrect option"
            variant="outlined"
          />
          {progress && <CircularProgress />}
          {emptyErr && (
            <Alert className="login_form" severity="error">
              Please enter all the require data
            </Alert>
          )}

          <Button
            disabled={progress}
            variant="outlined"
            onClick={handleAddQuestion}
          >
            Add Question
          </Button>
        </div>
      )}
      
    </div>
    </div>
  );
};

export default Update;
