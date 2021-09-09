import React, { Fragment } from "react";
import Image from "next/image";
import Whats from "../public/images/icons/whattt.png";
import classes from "../styles/whatsappbtn.module.css";
import { TriangleDownIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import NLink from 'next/link';

const Parentdiv = ({ children }) => {
  const path = useRouter().pathname;
  console.log(path);
  return (
    <div>
      <Fragment>{children}</Fragment>
      {path !== "/profile-evaluation" ? (
        <div className={classes.what}>
        <a style={{ color: 'black' }} href="https://api.whatsapp.com/send?phone=19254459180&text=Hey There" target='_blank'>
                      <Image alt="whatsapp" src={Whats} />
              </a>
          
        </div>
        
      ) : null}
      {path =="/mentors"?(
        <NLink href="/mentors/#mentorrs">
        <div className={classes.godown}>
        <TriangleDownIcon/>
        </div>
        </NLink>
      ):null}
    </div>
  );
};

export default Parentdiv;
