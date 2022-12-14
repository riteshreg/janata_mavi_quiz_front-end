import React from "react";
import Stack from "@mui/material/Stack";
import "./pages_style.css";
import ImageCard from "../components/ImageCard";
import { Typography } from "@mui/material";

function AboutUs() {

  const riteshImg =  "https://iili.io/Ho1iyzP.jpg"
  const saugatImg = "https://iili.io/Ho1iHlf.jpg"
  const anupImg = "https://iili.io/Ho1iMRp.jpg"
  const gopalImg = "https://scontent.fbdp1-1.fna.fbcdn.net/v/t1.15752-9/318416857_3344168082463081_5109954501792649591_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=i0zlFS9x6SYAX_Makh0&_nc_ht=scontent.fbdp1-1.fna&oh=03_AdTn3y7giOvUmH_AGoj0he2y3wQVLm5OnXaFCddzt7qSNw&oe=63C1258C"
  const nabinaImg = "https://i.ibb.co/mDrr9Yj/IMG-3d7a803857c5c32485e9e613bac32da8-V.jpg"


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
     


      <div className="main_blog_content_did">


      <Typography variant="subtitle1" gutterBottom>
        First Idea of Janata Quiz App was
      </Typography>

         <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
      </div>

      </div>
      
    </div>
  );
}

export default AboutUs;
