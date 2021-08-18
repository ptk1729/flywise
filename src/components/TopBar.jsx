import React from "react";
import flywiseLogo from "../assets/flywiseLogo.png";
import "../App.css";
import TopBarButtons from "./TopBarButtons";
import {
  Divider,
  makeStyles,
  Grid,
  AppBar,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";

const useStyles = makeStyles((them) => ({
  divider: {
    width: "1920px",
  },
}));

function TopBar(props) {
  const handlePrep = () => {
    console.log("Test Prep clicked");
  };

  const classes = useStyles();

  const handleProfileEvaluation = () => {
    console.log("Profile Evaluation clicked");
  };

  const handleService = () => {
    console.log("Service pressed");
  };

  const handleMentors = () => {
    console.log("Mentors Clicked");
  };

  const handleDestination = () => {
    console.log("Distination clicked");
  };

  const handleCourses = () => {
    console.log("Courses Pressed");
  };

  const handleContactUs = () => {
    console.log("Contact us Clicked");
  };

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar
      style={{
        backgroundColor: "white",
      }}
    >
      <Grid container item>
        {!isMatch ? (
          <Grid item xs={3} md={4} lg={4}>
            <img
              style={{ marginLeft: "80px" }}
              src={flywiseLogo}
              alt="Flywise logo"
            />
          </Grid>
        ) : (
          <Grid item xs={3} md={4} lg={4}>
            <img
              style={{ marginLeft: "10px" }}
              src={flywiseLogo}
              alt="Flywise logo"
            />
          </Grid>
        )}
        {!isMatch && (
          <>
            <Grid item xs={9} md={2} lg={1}>
              <TopBarButtons
                text="Test Prep"
                handleClick={() => handlePrep()}
              />
            </Grid>
            <Grid item xs={9} md={2} lg={1}>
              <TopBarButtons
                text="Profile Evaluation"
                handleClick={() => handleProfileEvaluation()}
              />
            </Grid>
            <Grid item xs={9} md={2} lg={1}>
              <TopBarButtons
                text="Services"
                handleClick={() => handleService()}
              />
            </Grid>
            <Grid item xs={9} md={2} lg={1}>
              <TopBarButtons
                text="Destinations"
                handleClick={() => handleDestination()}
              />
            </Grid>
            <Grid item xs={9} md={2} lg={1}>
              <TopBarButtons
                text="Mentors"
                handleClick={() => handleMentors()}
              />
            </Grid>
            <Grid item xs={9} md={2} lg={1}>
              <TopBarButtons
                text="Courses"
                handleClick={() => handleCourses()}
              />
            </Grid>
            <Grid item xs={9} md={2} lg={1}>
              <button
                className="topBarButton"
                onClick={() => handleContactUs(0)}
              >
                Contact Us
              </button>
            </Grid>
          </>
        )}
      </Grid>
    </AppBar>
  );
}

export default TopBar;
