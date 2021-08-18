import React, { useState } from "react";
import { Grid, useTheme, useMediaQuery } from "@material-ui/core";
import SelectionBoxes from "../components/SelectionBoxes3";
import TopBar from "../components/TopBar";
import { Link } from "react-router-dom";

const data1 = () => {
  return {
    0: {
      name: "Spring 2022",
      show: false,
    },
    1: {
      name: "Fall 2022",
      show: false,
    },
    2: {
      name: "Spring 2023",
      show: false,
    },
    3: {
      name: "Fall 2023",
      show: false,
    },
    4: {
      name: "Other",
      show: false,
    },
  };
};

function PE5(props) {
  const [data, setData] = useState(data1());

  const handleCountrySelect = (name) => {
    let newC = { ...data };
    for (let i = 0; i < 5; i++) {
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
              Which country are you planning to go?
            </div>
          ) : (
            <div
              className="primary"
              style={{ marginTop: "200px", textAlign: "center" }}
            >
              Which country are you planning to go?
            </div>
          )}
        </Grid>

        <Grid
          container
          xs={12}
          lg={12}
          style={{ marginTop: "52px" }}
          spacing={10}
        >
          <Grid item xs={12} md={6} lg={2}>
            <SelectionBoxes c={data[0]} handleClick={handleCountrySelect} />
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
            <Link to="/PE7">
              <button className="nextButton">Next</button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default PE5;
