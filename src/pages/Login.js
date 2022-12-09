import React, { Component } from "react";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { FormHelperText } from "@mui/material";
import { Button } from "@mui/material";
import {TextField} from '@mui/material'

import { Input } from "@mui/material";
import "./pages_style.css";

export class Login extends Component {
  render() {

    return (
      <div className="login-form_container">
        <div className="form_container">
        <FormControl className='login_form'>
          <TextField id="outlined-basic" label="user id" variant="outlined" />
          <FormHelperText id="my-helper-text">
            Enter your admin userid
          </FormHelperText>
        </FormControl>
        <FormControl className="login_form">
          <TextField style={{marginTop:'20px'}} id="outlined-basic" label="password" variant="outlined" />
          <FormHelperText id="my-helper-text">
            enter your password
          </FormHelperText>
        </FormControl>
        <Button style={{margin:"30px"}} variant="contained">Login</Button>
        </div>
      </div>
    );
  }
}

export default Login;
