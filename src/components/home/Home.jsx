import React from "react";
import { Comp1 } from "./Comp1";
import { Comp2 } from "./Comp2";
import { Comp3 } from "./comp3/Comp3";
import { Comp4 } from "./Comp4";
import { Comp5 } from "./comp5/Comp5";
import { Comp6 } from "./Comp6";
import { Comp7 } from "./Comp7";
import ProjectSlider from "./ProjectSlider";
import './Home.css';
export const Home = () =>{
    return (
        <>
          <Comp1 />
          <Comp2 />
          <Comp3 />
          <Comp4 />
          <Comp5 />
          <ProjectSlider />
          <Comp6 />
          <Comp7 />



        </>
    )
}
