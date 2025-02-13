import React from "react";
import { Outlet } from "react-router-dom";
import { Comp1 } from "./Comp1";
import { Comp2 } from "./Comp2";
import { Comp3 } from "./Comp3";
import './Products.css';
export const Products = () =>{
    return (
        <>
          <Comp1 />
          <Comp2 />
          <Comp3 />
        </>
    )
}