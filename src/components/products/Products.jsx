import React from "react";
import { Outlet } from "react-router-dom";
import { Comp1 } from "./Comp1";
import { Comp2 } from "./Comp2";
import { Comp3 } from "./comp3/Comp3";
import './Products.css';
import { useParams } from "react-router-dom"; 

export const Products = () =>{
  const { productId } = useParams(); // Get product ID from route
  console.log('productId:', productId);
    return (
        <>
          <Comp1 productId={productId} />
          <Comp2 productId={productId}/>
          {/* Show Comp3 only if productId is "1" */}
          {productId === "1" && <Comp3 productId={productId}/>}
          {/* {Alternative Approach: Using Ternary (? :)} */}
          {/* {productId === "1" ? <Comp3 productId={productId}/> : null} */}
        </>
    )
}