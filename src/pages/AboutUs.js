import React from "react";
import Stack from "@mui/material/Stack";
import "./pages_style.css";
import ImageCard from "../components/ImageCard";
import { Link, Typography } from "@mui/material";

function AboutUs() {

  const riteshImg =  "https://iili.io/Ho1iyzP.jpg"
  const saugatImg = "https://iili.io/Ho1iHlf.jpg"
  const anupImg = "https://iili.io/Ho1iMRp.jpg"
  const gopalImg = "https://scontent.fbdp1-1.fna.fbcdn.net/v/t1.15752-9/318416857_3344168082463081_5109954501792649591_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=i0zlFS9x6SYAX_Makh0&_nc_ht=scontent.fbdp1-1.fna&oh=03_AdTn3y7giOvUmH_AGoj0he2y3wQVLm5OnXaFCddzt7qSNw&oe=63C1258C"
  const nabinaImg = "https://media.gq-magazine.co.uk/photos/5f3128b56fac12aa860925f0/1:1/w_1080,h_1080,c_limit/20200810-Chris-Hemsworth-06.jpg"



  const style = {
    fontFamily:"Poppins", fontSize:"20px" , lineHeight:"1.6", textAlign:"justify",    userSelect:"none"
  }

  return (
    <div className="main_about_us_container">
      <Stack direction="row" >
       <ImageCard name="Ritesh Khadka" src={riteshImg} description={"Programmer of Janata Quiz App"}/>       
      </Stack>

        <Stack direction="row">
          <ImageCard name="Anup Dahal" src={anupImg} description={"Web Tester and Data entry on Janata Quiz app"}/>
          <ImageCard name="Saugat Bhattrai" src={saugatImg} description={"ielts classes homework writer on meeting"}/>
        </Stack>

    
        <Stack direction="row">
          <ImageCard name="Gopal Bhandari" src={gopalImg} description={"Ui and Ux designer and Web Tester "}/>
          <ImageCard name="Nabina Subedi" src={nabinaImg} description={"Project Manager"}/>
        </Stack>


      <div className="blogContainerDiv">
        <div className="TitleBlogDiv">
        <Typography variant="h1" component="h2">
        How We Started
         </Typography>
        <Typography variant="h2">
        Janata Quiz App
      </Typography>
        </div>
     


      <div className="main_blog_content_did" style={{margin:"1rem", padding:"20px", fontSize:"18px"}}>

      

         <Typography variant="body1" sx={style} gutterBottom>      
The First Version of janata quiz was built on 10 December 2022. The initial version includes the Play Quiz Section and a score section. Where users can play a quiz and see their result. 
We initially fetch questions from a third party free Api. But We are not satisfied. We want something more, something big. And then we got an idea why not make a quiz app which contains all of the questions in nepali language. To achieve that we have to create a backend and connect that backend with a remote database. So for the backend we choose node js. As for me Ritesh Khadka, I started creating the backend of the janata quiz app first due to the excitement. We choose mongodb as a remote database as it provides free remote database service. After connecting all of the wire we started testing the get, post, put and delete method. After solving some of the issues. We publish the project on render.com which is again free to use as a backend hosting site. As majority of backend work is done. We started fetching the data from our own made api to our frontend. On the backend we can now fetch questions, insert questions and delete them. We made a Home page where we can see our question, a Add Questions page to insert questions. But again something is missing. So we started building login functionality. We created a private route where users can only enter when they login. We also have to implement that on our backend as well. So for login we created a post method to check the (req.body) on the mongoose model and if the mongoose (findOne) method finds something on the database then it sends the response back to front-end. Finally we created our basic version of the app.

      </Typography>

      <Typography variant="body1" sx={style}  style={{marginTop:"20px"}} gutterBottom>      
      On the front-end we can now play a quiz, see results, Login to our admin panel, See the list of all questions, add questions and delete a particular question. Now we started inserting questions on our janata quiz app. While doing that we face problems. If we made some  mistake while inserting a question. We have to delete that and reinsert carefully. So to solve that problem I started building an update functionality. First I implement a get method on the backend which sends the response based on params. The get method searches one document on  the mongoose model  and sends back the response if found. To make an update functionality get method is not the only thing. We have to create a put method which gets Id of a particular document from params and updated string from (req.body) and then it updates the database using (model.updateOne) method. Now We started fetching the update api on our front-end. When our component first renders it fetch data using id and then set that response to the state.  When the update button is pressed, the put api comes into action and updates that data to our database. 

      </Typography>

      <Typography variant="body1" sx={style}  style={{marginTop:"20px"}} gutterBottom>     
      Our majority of work is done. Now we started fixing the bug, updating the ui, optimising both front-end and back-end. While doing that we got an idea to implement a stop timer. As the name suggests the work of the stop timer is to show the countdown and prevent the user from overtiming. To implement that we use an npm package.
 
      </Typography>

      <Typography variant="body1" sx={style} style={{marginTop:"10px"}} gutterBottom>
      The final ui work is done here when we implement a loading screen while fetching data from the api and making a website response. 
      </Typography>

      <Typography variant="body1" sx={style}  style={{marginTop:"10px"}} gutterBottom>     
      We Learn many concepts and ideas while building the janata quiz app. We learn how backend works and how data flows from back-end to  front-end and vice versa. All of our work is on github. There are two repo 
      <Link target="_blank" href="https://github.com/riteshreg/janata_mavi_quiz_front-end">Janta Quiz Frontend</Link> 
      
       and <Link target="_blank" href="https://github.com/riteshreg/janata_mavi_quiz_backend">Janta Quiz Backend</Link>.
      </Typography>

   
      </div>

      </div>
      
    </div>
  );
}

export default AboutUs;
