import { Button, TextField } from "@mui/material";
import React, { useState } from "react";


const AddQuestion = () =>{


  const [formData, setFormData] = useState({
    question:'',
    answer:"",
    option1:"",
    option2:"",
    option3:"" 
  })

  const handleChange = (event) => {
    setFormData(
        {  
            ...formData,
            [event.target.name] : event.target.value
            
        }
      )
  };

 

  const handleAddQuestion = () => {
    console.log(formData);
  };


    return (
      <div className="login-form_container">
        <div className="form_container">
          <TextField
            id="filled-basic"
            name="question"
            value={formData.question}
            onChange={handleChange}
            label="quesitons"
            variant="filled"
          />
          <TextField
            id="filled-basic"
            name="answer"
            value={formData.answer}
            onChange={handleChange}
            label="answer"
            variant="filled"
          />
          <TextField
            id="filled-basic"
            name="option1"
            value={formData.option1}
            onChange={handleChange}
            label="incorrect option"
            variant="filled"
          />
          <TextField
            id="filled-basic"
            name="option2"
            onChange={handleChange}
            value={formData.option2}
            label="incorrect option"
            variant="filled"
          />
          <TextField
            id="filled-basic"
            name="option3"
            value={formData.option3}
            onChange={handleChange}
            label="incorrect option"
            variant="filled"
          />

          <Button variant="contained" onClick={handleAddQuestion}>
            Add Question
          </Button>
        </div>
      </div>
    );
  }


export default AddQuestion;
