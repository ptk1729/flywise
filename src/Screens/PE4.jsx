import React from "react";
import { Grid, useTheme, useMediaQuery, Container } from "@material-ui/core";
import TopBar from "../components/TopBar";
import { Link } from "react-router-dom";

function PE4(props) {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const small = (
    <div
      className="primary"
      style={{
        marginTop: "200px",
        fontSize: "30px",
        textAlign: "center",
      }}
    >
      Please answer the questions below
    </div>
  );
  const large = (
    <div
      className="primary"
      style={{
        marginTop: "200px",
        textAlign: "center",
      }}
    >
      Please answer the questions below
    </div>
  );
  return (
    <Container maxWidth="lg">
      <Grid container justifyContent="center" spacing={10}>
        <TopBar />
        <Grid item xs={12} lg={12} md={12}>
          {isMatch ? small : large}
        </Grid>

        <Grid
          container
          xs={12}
          lg={12}
          spacing={10}
          style={{ paddingTop: "54px" }}
        >
          <Grid container item xs={12} lg={6}>
            <Grid item xs={12} lg={12}>
              <div
                className="primary"
                style={{ fontSize: "24px", lineHeight: "25px" }}
              >
                Any work experience?*
              </div>

              <input
                className="selectInput"
                placeholder="  Enter Score"
                style={{ fontSize: "16px" }}
              ></input>
            </Grid>
          </Grid>
          <Grid container item xs={12} lg={6}>
            <Grid item xs={12} lg={12}>
              <div
                className="primary"
                style={{ fontSize: "24px", lineHeight: "25px" }}
              >
                {" "}
                Undergrad(B.tech) College/University*
              </div>
              <input
                className="selectInput"
                placeholder="  Enter Score"
                style={{ fontSize: "16px" }}
              ></input>
            </Grid>
          </Grid>

          <Grid container item xs={12} lg={6}>
            <Grid item xs={12} lg={12} style={{ paddingRight: 20 }}>
              <div
                className="primary"
                style={{ fontSize: "24px", lineHeight: "25px" }}
              >
                Number of backlogs*
              </div>

              <input
                className="selectInput"
                placeholder="  Enter Score"
                style={{ fontSize: "16px" }}
              ></input>
            </Grid>
          </Grid>
          <Grid container item xs={12} lg={6}>
            <Grid item xs={12} lg={12} style={{ paddingRight: 20 }}>
              <div
                className="primary"
                style={{
                  fontSize: "24px",
                  lineHeight: "30px",
                  lineHeight: "25px",
                }}
              >
                C.G.P.A*
              </div>
              <input
                className="selectInput"
                placeholder="  Enter Score"
                style={{ fontSize: "16px" }}
              ></input>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} lg={12}>
            <Link to="/PE5">
              <button className="nextButton">Next</button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default PE4;
