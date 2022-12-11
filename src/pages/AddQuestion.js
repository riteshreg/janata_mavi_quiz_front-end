import { Alert, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "./pages_style.css";

const AddQuestion = () => {
  const [formData, setFormData] = useState({
    question: "",
    correctAnswer: "",
    option1: "",
    option2: "",
    option3: "",
  });

  const [progress, setProgress] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleAddQuestion = () => {
    setProgress(true);
    fetch("https://janta-mabi-quiz.onrender.com/", {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "Application/json",
      },
    }).then((response) => {
      setSuccess(true);
      response.json().then((result) => {
        setProgress(false);
        setFormData({ question: "",
        correctAnswer: "",
        option1: "",
        option2: "",
        option3: "",})
        console.log(result);
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      });
    });
  };

  return (
    <div className="login-form_container add_main_container ">
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
          variant="filled"
        />
        <TextField
          style={{ margin: "10px" }}
          id="filled-basic"
          name="correctAnswer"
          className="add_question_form"
          value={formData.correctAnswer}
          onChange={handleChange}
          label="answer"
          variant="filled"
        />
        <TextField
          style={{ margin: "10px" }}
          id="filled-basic"
          name="option1"
          className="add_question_form"
          value={formData.option1}
          onChange={handleChange}
          label="incorrect option"
          variant="filled"
        />
        <TextField
          style={{ margin: "10px" }}
          id="filled-basic"
          name="option2"
          className="add_question_form"
          onChange={handleChange}
          value={formData.option2}
          label="incorrect option"
          variant="filled"
        />
        <TextField
          style={{ margin: "10px" }}
          id="filled-basic"
          name="option3"
          className="add_question_form"
          value={formData.option3}
          onChange={handleChange}
          label="incorrect option"
          variant="filled"
        />
        {progress && <CircularProgress />}
        <Button
          disabled={progress}
          variant="contained"
          onClick={handleAddQuestion}
        >
          Add Question
        </Button>
        
      </div>
      { success &&( 
          <Alert severity="success">
            the question has been successfully uploaded to the database
          </Alert>
        )}
    </div>
    
  );
};

export default AddQuestion;
