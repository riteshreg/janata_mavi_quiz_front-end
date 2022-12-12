import React, { Component } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export class Score extends Component {
  render() {
    const {score} = this.props
    return (
      <React.Fragment>
      <CssBaseline />
      <Container sx={{ bgcolor: '#cfe8fc', height: '60vh' }} className="score_container" maxWidth="sm">
        <Box>
          <h1>{score}</h1>
        </Box>
      </Container>
    </React.Fragment>
  
    )
  }
}

export default Score