import React from "react";
import { Comp1 } from "./Comp1";
import { Comp2 } from "./Comp2";
import './Services.css';
import { useParams } from "react-router-dom";
export const Services = () =>{
  const { serviceId } = useParams(); // Get service ID from route
  console.log('serviceId:', serviceId);
    return (
        <>
          <Comp1 serviceId={serviceId}/>
          <Comp2 />
        </>
    )
}