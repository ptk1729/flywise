import React from 'react'
import classes from "../styles/whatsappbtn.module.css"
import { Image } from '@chakra-ui/image'
function testimonial(props) {
    return (
        <div className={classes.test}>
        <div className={classes.imagess}>
        <Image className={classes.testImg} src={props.img}/>
        <Image className={classes.logo} src={props.logo}/>
        </div>
        <p className={classes.text}>{props.text}</p>
        <h2>{props.name}</h2>
        <p className={classes.degree}>{props.degree}</p>
        <p className={classes.degree}>{props.uni}</p>
        
            
        </div>
    )
}

export default testimonial;
