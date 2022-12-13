import React, { useEffect, useState } from "react";
import { FormControl } from "@mui/material";
import { FormHelperText } from "@mui/material";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";

// import LinearProgress from '@mui/material/LinearProgress';
// import Box from '@mui/material/Box';

// import { Input } from "@mui/material";
import "./pages_style.css";

const Login = () => {
  const Navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("login");
    if (auth) {
      Navigate("/admin");
    }
  });

  const [loginId, setLoginId] = useState({
    userName: "",
    password: "",
  });

  const [cirProgress, setCirProgresss] = useState(false);
  const [emptyErr, setEmptyErr] = useState(false)

  const handleChange = (event) => {
    setLoginId({
      ...loginId,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = () => {

    if(!loginId.userName || !loginId.password){
      setEmptyErr("Please enter both username and password ")
    }else{
      setEmptyErr(false) 
    setCirProgresss(true);

    fetch("https://janta-mabi-quiz.onrender.com/login", {
      method: "post",
      body: JSON.stringify(loginId),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      response.json().then((result) => {
        console.log(result);
        if (result.userName) {
          setCirProgresss(false);
          localStorage.setItem("login", JSON.stringify(result.userName));
          Navigate("/admin");
        }else{
          setCirProgresss(false);
          setEmptyErr(result.err)
        }
      });
    });
  }
  };

  return (
    <div className="login-form_container">
      <div className="form_container">
        <h1>Login Page</h1>
        <FormControl className="login_form">
          <TextField
            name="userName"
            value={loginId.userId}
            onChange={handleChange}
            id="outlined-basic"
            label="user id"
            variant="outlined"
          />
          <FormHelperText id="my-helper-text">
            Enter your admin userid
          </FormHelperText>
        </FormControl>
        <FormControl className="login_form">
          <TextField
            name="password"
            value={loginId.password}
            onChange={handleChange}
            style={{ marginTop: "20px" }}
            id="outlined-basic"
            label="password"
            variant="outlined"
          />
          <FormHelperText id="my-helper-text">
            enter your password
          </FormHelperText>
        </FormControl>
        {cirProgress && <CircularProgress color="success" />}
        {emptyErr && <Alert className="login_form" severity="error">{emptyErr}</Alert>}
        <Button
          disabled={cirProgress}
          onClick={handleLogin}
          style={{ margin: "30px" }}
          variant="contained"
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
