import React, { useState } from "react";
import { Grid, useTheme, useMediaQuery } from "@material-ui/core";
import SelectionBoxes from "../components/SelectionBoxes3";
import TopBar from "../components/TopBar";
import { Container } from "@material-ui/core";

function PE7(props) {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <>
      <Grid container justifyContent="center">
        <TopBar />
        <Grid container item style={{ marginTop: "100px" }}>
          <Grid item md={12} xs={12} lg={12} style={{ marginTop: "105px" }}>
            <input
              className="selectInput"
              placeholder="  Enter Name"
              style={{ fontSize: "16px", width: "90%", maxWidth: "400px" }}
            ></input>
          </Grid>
          <Grid item md={12} xs={12} lg={12} style={{ marginTop: "44px" }}>
            <input
              className="selectInput"
              placeholder="  Enter Email"
              style={{ fontSize: "16px", width: "90%", maxWidth: "400px" }}
            ></input>
          </Grid>
          <Grid item md={12} xs={12} lg={12} style={{ marginTop: "44px" }}>
            <input
              className="selectInput"
              placeholder="  Phone Number"
              style={{ fontSize: "16px", width: "90%", maxWidth: "400px" }}
            ></input>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default PE7;
