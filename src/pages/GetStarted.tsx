import React from "react";

import { useNavigate } from "react-router-dom";

import { Fab } from "@mui/material";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import styles from "./getStarted.module.css";

function GetStarted() {
  const navigate = useNavigate();
  const textStyle = {
    padding: "15px",
    fontWeight: "bold",
  };
  const fabStyle = {
    width: "80vw",
  };

  const clickHanlder = () => {
    console.log("clicked");
    navigate("/home");
  };
  return (
    <div className={styles.App}>
      <div className={styles.Getstarted}>
        <Fab
          variant="extended"
          color="primary"
          onClick={clickHanlder}
          style={fabStyle}
        >
          <p style={textStyle}>Get Started</p>{" "}
          <EastRoundedIcon sx={{ mr: 1 }} />
        </Fab>
      </div>
    </div>
  );
}

export default GetStarted;
