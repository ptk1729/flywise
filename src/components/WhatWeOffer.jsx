import React from "react";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import HomeCardText from "./HomeCardText";

const useStyles = makeStyles((theme) => ({
  paper: {
    height: 558,
    width: 425,
    boxshadow: "0px 0px 50px 23px rgba(220, 220, 220, 0.25)",
  },
}));

function WhatWeOffer(props) {
  const classes = useStyles();
  return (
    <>
      <div className="whatWeOfferBg">
        <div className="primary" style={{ textAlign: "center" }}>
          What we Offer
        </div>
        <div className="learnMore">Learn more about the services we offer</div>
        <Grid
          container
          justifyContent="center"
          spacing={4}
          style={{ marginTop: "46px" }}
        >
          <Grid item>
            <Paper className={classes.paper}>
              <HomeCardText
                heading="Pre-Admission Support"
                listContent={[
                  "Test preparation",
                  "Course selection",
                  "University selection",
                  "SOP & LOR",
                  "Application assistance",
                ]}
              />
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>
              <HomeCardText
                heading="Post-Admission
                suppot"
                listContent={[
                  "VISA assistance",
                  "Loan assistance",
                  "Forex",
                  "Roommate matching",
                  "Pre departure guidance",
                ]}
              />
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>
              <HomeCardText
                heading="Abroad career
                support"
                listContent={[
                  "Profile building",
                  "Test preparation",
                  "Professional networking",
                  "Interview training",
                  "Job referrals at top",
                  "tech companies",
                ]}
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default WhatWeOffer;
