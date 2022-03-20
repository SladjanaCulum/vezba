import React from "react";
import "./HomePage.css";
import { lokacije } from "../services/lokacije";
import { opstine } from "../services/opstine";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div>
      <Link to="/locations" className="link">
        Lokacije
      </Link>
      <p>Ukupan broj lokacija: {lokacije.length}</p>
      <p>
        Ukupan broj opstina bez lokacije:
        {opstine.length - lokacije.length}
      </p>
    </div>
  );
};
