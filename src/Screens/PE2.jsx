import React, { useState } from "react";
import { Grid, useTheme, useMediaQuery, Container } from "@material-ui/core";
import SelectionBoxes from "../components/SelectionBoxes1";
import TopBar from "../components/TopBar";
import { Link } from "react-router-dom";

const data1 = () => {
  return {
    0: {
      name: "MS Computer science / Software engineering (Intensive coding)",
      show: false,
    },
    1: {
      name: "MS Data science (Coding + statistic skills)",
      show: false,
    },
    2: {
      name: "MS Business analytics (Minimal coding + analytic skills)",
      show: false,
    },
    3: {
      name: "MS Information systems (Minimal coding + communication skills)",
      show: false,
    },
    4: {
      name: "Other",
      show: false,
    },
  };
};

function PE(props) {
  const [data, setData] = useState(data1());

  const handleCountrySelect = (name) => {
    let newC = { ...data };
    for (let i = 0; i < 4; i++) {
      if (newC[i].name === name) newC[i].show = true;
      else newC[i].show = false;
    }
    setData(newC);
  };

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <>
      <Grid container justifyContent="center" spacing={10}>
        <TopBar />
        <Grid item xs={12} lg={12}>
          {isMatch ? (
            <div
              className="primary"
              style={{
                marginTop: "200px",
                textAlign: "center",
                fontSize: "30px",
                lineHeight: "35px",
              }}
            >
              Are you planning to pursue masters in any of the below courses?
            </div>
          ) : (
            <div
              className="primary"
              style={{ marginTop: "200px", textAlign: "center" }}
            >
              Are you planning to pursue masters in any of the below courses?
            </div>
          )}
        </Grid>

        <Grid
          container
          xs={12}
          lg={12}
          style={{ marginTop: "52px" }}
          spacing={10}
          justifyContent="center"
        >
          <Grid item xs={12} md={6} lg={2}>
            <SelectionBoxes
              c={data[0]}
              handleClick={handleCountrySelect}
              active="true"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={2}>
            <SelectionBoxes c={data[1]} handleClick={handleCountrySelect} />
          </Grid>
          <Grid item xs={12} md={6} lg={2}>
            <SelectionBoxes c={data[2]} handleClick={handleCountrySelect} />
          </Grid>
          <Grid item xs={12} md={6} lg={2}>
            <SelectionBoxes c={data[3]} handleClick={handleCountrySelect} />
          </Grid>
          <Grid item xs={12} md={6} lg={2}>
            <SelectionBoxes c={data[4]} handleClick={handleCountrySelect} />
          </Grid>
          <Grid item xs={12} md={6} lg={12}>
            <Link to="/PE3">
              <button className="nextButton">Next</button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default PE;
