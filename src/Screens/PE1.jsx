import React, { useState } from "react";
import TopBar from "../components/TopBar";
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import c4 from "../assets/c4.png";
import flag from "../assets/flag.png";
import { Grid, useTheme, useMediaQuery, Button } from "@material-ui/core";
import SelectionBoxes from "../components/SelectionBoxes";
import { Link } from "react-router-dom";
import { useEffect } from "react";

let countrys = () => {
  return {
    0: {
      name: "USA",
      image: c1,
      show: false,
    },
    1: {
      name: "Australia",
      image: c2,
      show: false,
    },
    2: {
      name: "Canada",
      image: c3,
      show: false,
    },
    3: {
      name: "UK",
      image: c4,
      show: false,
    },
    4: {
      name: "Other",
      image: flag,
      show: false,
    },
  };
};

let path = "/PE1";

function PE1(props) {
  const [data, setData] = useState(countrys());

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
  const isSelected = () => {
    let res = -1;
    for (let i = 0; i < 4; i++) {
      if (data[i].show) res = i;
    }
    return res;
  };
  useEffect(() => {
    if (isSelected() == -1) path = "/PE1";
    else {
      path = "/PE2/" + data[isSelected()].name;
    }
    console.log(path);
  }, [data]);

  useEffect(() => console.log(path));

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
          style={{ marginTop: "52px" }}
          spacing={5}
          justifyContent="center"
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
            <Link to={path}>
              <button className="nextButton">Next</button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default PE1;
