import { Button, TextField } from '@mui/material'
import React, { Component } from 'react'



export class AddQuestion extends Component {

  constructor(props){
    super(props)
    this.state = {
      question:"",
      answer:"",
      option:[]
    }
  }


  handleChange = (event) => {

  }


  render() {
    return (
      <div className="login-form_container">
      <div className="form_container">

      <TextField id="filled-basic"  name="question"   onChange={this.handleChange}  label="quesitons" variant="filled" />
      <TextField id="filled-basic"  name="answer"  onChange={this.handleChange} label="answer" variant="filled" />
      <TextField id="filled-basic"  name="option1" onChange={this.handleChange}  label="incorrect option" variant="filled" />
      <TextField id="filled-basic"  name="option2" label="incorrect option" variant="filled" />
      <TextField id="filled-basic" name="option3"  onChange={this.handleChange}  label="incorrect option" variant="filled" />

      <Button variant='contained'>Add Question</Button>

      </div>
    </div>
    )
  }
}

export default AddQuestion