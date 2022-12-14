import React from "react";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./component_style.css";

const ImageCard = ({ name, src, description }) => {
  return (
    <div className="ritesh_about_us_container">
      <Card
        sx={{ minWidth: 350, borderRadius: "20px", backgroundColor: "#f4f4f4" }}
        className="ritesh_card_main"
      >
        <CardContent className="ritesh_card" sx={{ textAlign: "center" }}>
          <Typography
            sx={{ fontSize: 20, textAlign: "center", fontWeight: "580" }}
            color="text.primary"
            gutterBottom
          >
            {name}
          </Typography>
          <Avatar
            onDragStart={(event) => event.preventDefault()}
            alt={name}
            sx={{ width: 200, height: 200, border:"3px solid #0bba54" }}
            src={src}
          />
          <Typography
            sx={{
              marginTop: "4px",
              fontSize: "14px",
              fontWeight: "500",
              maxWidth: "80%",
            }}
            color="text.primary"
            variant="body2"
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ImageCard;
