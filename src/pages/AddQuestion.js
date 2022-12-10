import { Button, TextField } from '@mui/material'
import React, { Component } from 'react'



export class AddQuestion extends Component {

  constructor(props){
    super(props)
    this.state = {
      question:"",
      answer:"",
      option1:"",
      opiton2:"",
      option3:""
    }
  }


  handleChange = (event) => {

  }


  render() {
    return (
      <div className="login-form_container">
      <div className="form_container">

      <TextField id="filled-basic"  name="question" value={this.state.question}  onChange={this.handleChange}  label="quesitons" variant="filled" />
      <TextField id="filled-basic"  name="answer" value={this.state.answer} onChange={this.handleChange} label="answer" variant="filled" />
      <TextField id="filled-basic"  name="option1" value={this.state.option1} onChange={this.handleChange}  label="incorrect option" variant="filled" />
      <TextField id="filled-basic"  name="option2" value={this.state.option2} label="incorrect option" variant="filled" />
      <TextField id="filled-basic" name="option3" value={this.state.option3} onChange={this.handleChange}  label="incorrect option" variant="filled" />

      <Button variant='contained'>Add Question</Button>

      </div>
    </div>
    )
  }
}

export default AddQuestion