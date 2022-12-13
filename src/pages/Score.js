import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';




export default function BasicCard({score}) {

  const Navigate = useNavigate();

  React.useEffect(()=>{
    if(localStorage.getItem("login")){
      Navigate('/')
    }
  })

  return (
    <div className="scoreDiv">
    <Card sx={{ minWidth: 605, maxWidth:800}}>
      <CardContent>
        <Typography variant="h2"  component="div" color="text.secondary" gutterBottom>
         Janata Quiz App
        </Typography>
      
        <Typography variant="h1" color="text.secondary">
          {score}/10
        </Typography>
        
        <Typography variant="h4" color="text.secondary">
          Your Total Score
        </Typography>
      </CardContent>
      <CardActions className="score_cardAction">
        <Button size="small" onClick={()=>Navigate('/')}>Restart Quiz</Button>
      </CardActions>
    </Card>
    </div>
  );
}