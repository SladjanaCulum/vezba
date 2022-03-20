import React from "react";
import "./SingleLocation.css";
import { Link } from "react-router-dom";

export const SingleLocation = () => {
    // <Link to={`/candidates/${location.id}`} className="aLink">
    //   <div  key={location.id}>
    //       <p>{location.name} </p
    //      <p>{location.legalName}</p>
    //   </div>
    // </Link>

    
  return (
    <div>
      <Link to="/locations" className="link">
        Vrati se
      </Link>
      <p>Hi</p>
    </div>
  );
};
