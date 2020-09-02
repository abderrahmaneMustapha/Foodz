import React from "react"
import {
    NavLink,
  } from "react-router-dom";
  
  export function ListItemLink({ to, ...rest }) {
    return (
    <>
           
    <NavLink className="nav-link"  activeClassName="active" to={to} {...rest} />
    
    </>
    );
  }