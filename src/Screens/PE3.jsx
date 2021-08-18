import React from "react";
import TopBar from "../components/TopBar";
import { Grid, useTheme, useMediaQuery } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import CircleChecked from "@material-ui/icons/CheckCircleOutline";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";

function CheckBoxes({ text, handleClick, active }) {
  return (
    <>
      <Grid item xs={1} lg={1}>
        <Checkbox
          onChange={handleClick}
          checked={active}
          icon={<CircleUnchecked style={{ color: "#0DB3FB" }} />}
          checkedIcon={<CircleChecked style={{ color: "#0DB3FB" }} />}
        />
      </Grid>
      <Grid item xs={11} lg={11}>
        <div
          className="primary"
          style={{
            fontSize: "18px",
            lineHeight: "20px",
            color: "#7D7D7D",
            paddingTop: "10px",
          }}
        >
          {text}
        </div>
      </Grid>
    </>
  );
}

function PE3(props) {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const small = (
    <div
      className="primary"
      style={{
        // width: "903px",
        marginTop: "200px",
        fontSize: "30px",
        textAlign: "center",
      }}
    >
      Please enter your TEST scores
    </div>
  );
  const large = (
    <div
      className="primary"
      style={{
        // width: "903px",
        marginTop: "200px",
        textAlign: "center",
      }}
    >
      Please enter your TEST scores
    </div>
  );
  return (
    <Container maxWidth="lg">
      <Grid container justifyContent="flex-start">
        <TopBar />
        <Grid item xs={12} lg={12} md={12}>
          {isMatch ? small : large}
        </Grid>

        <Grid
          container
          xs={12}
          lg={12}
          spacing={10}
          style={{ paddingTop: "100px" }}
        >
          <Grid container item xs={12} lg={6}>
            <Grid item xs={12} lg={12}>
              <div className="primary" style={{ fontSize: "24px" }}>
                GRE Quant score*
              </div>
              <div
                className="primary"
                style={{
                  fontSize: "1rem",
                  lineHeight: "25px",
                  color: "#7D7D7D",
                  paddingBottom: "40px",
                }}
              >
                Please write "Not taken yet" if you are yet to take GRE and "Not
                applicable" if you don't want to take GRE test
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
              <div className="primary" style={{ fontSize: "24px" }}>
                GRE Verbal score*
              </div>
            </Grid>
            <Grid item xs={12} lg={12}>
              <div
                className="primary"
                style={{
                  fontSize: "1rem",
                  lineHeight: "20px",
                  color: "#7D7D7D",
                  paddingBottom: "40px",
                }}
              >
                Please write "Not taken yet" if you are yet to take GRE and "Not
                applicable" if you don't want to take GRE test
              </div>
              <input
                className="selectInput"
                placeholder="  Enter Score"
                style={{ fontSize: "16px" }}
              ></input>
            </Grid>
          </Grid>
        </Grid>

        <Grid container item xs={12} lg={6}>
          <Grid
            item
            xs={12}
            lg={12}
            style={{ marginTop: "56px", paddingRight: 20 }}
          >
            <div
              className="primary"
              style={{ fontSize: "24px", paddingBottom: "20px" }}
            >
              {" "}
              IELTS/TOEFL*
            </div>
            <div
              className="primary"
              style={{
                fontSize: "1rem",
                lineHeight: "20px",
                color: "#7D7D7D",
                paddingBottom: "30px",
              }}
            >
              Please write "Not taken yet" if you are yet to take GRE and "Not
              applicable" if you don't want to take GRE test
            </div>
            <input
              className="selectInput"
              placeholder="  Enter Score"
              style={{ fontSize: "16px" }}
            ></input>
          </Grid>
        </Grid>
        <Grid container item xs={12} lg={6}>
          <Grid
            item
            xs={12}
            lg={12}
            style={{ marginTop: "56px", paddingRight: 20 }}
          >
            <div
              className="primary"
              style={{
                fontSize: "24px",
                lineHeight: "30px",
                paddingBottom: "20px",
              }}
            >
              Do you need GRE/IELTS/TOEFL training?
            </div>
          </Grid>
          <CheckBoxes
            text="Yes"
            handleClick={() => console.log("Changed")}
            active={false}
          />

          <CheckBoxes
            text="No"
            handleClick={() => console.log("Changed")}
            active={false}
          />
          <CheckBoxes
            text="Maybe"
            handleClick={() => console.log("Changed")}
            active={false}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={12}>
          <Link to="/PE4">
            <button className="nextButton">Next</button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}

export default PE3;
