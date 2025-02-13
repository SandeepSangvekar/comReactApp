import React from "react";
import { Comp1 } from "./Comp1";
import { Comp2 } from "./Comp2";
import './Contact.css';
export const Contact = () =>{
    return (
        <>
          {/* <div className="fullWrapper contact-main"> */}
            <Comp1 />
            <Comp2 />
          {/* </div> */}
        </>
    )
}