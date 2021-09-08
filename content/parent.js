import React, { Fragment } from "react";
import Image from "next/image";
import Whats from "../public/images/icons/whattt.png";
import classes from "../styles/whatsappbtn.module.css";
import { useRouter } from "next/router";

const Parentdiv = ({ children }) => {
  const path = useRouter().pathname;
  console.log(path)
  return (
    <div>
      <Fragment>{children}</Fragment>
      {path !== "/profile-evaluation" ? (
        <div className={classes.what}>
          <Image alt="whatsapp" src={Whats} />
        </div>
      ) : null}
    </div>
  );
};

export default Parentdiv;
