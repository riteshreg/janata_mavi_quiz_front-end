import React from "react";
import Stack from "@mui/material/Stack";
import "./pages_style.css";
import ImageCard from "../components/ImageCard";

function AboutUs() {

  const riteshImg =  "https://i.ibb.co/mDrr9Yj/IMG-3d7a803857c5c32485e9e613bac32da8-V.jpg"
  const saugatImg = "https://iili.io/Hocrwfp.jpg"
  const anupImg = "https://iili.io/HocI5dv.jpg"
  const gopalImg = "https://i.ibb.co/mDrr9Yj/IMG-3d7a803857c5c32485e9e613bac32da8-V.jpg"
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

      
    </div>
  );
}

export default AboutUs;
