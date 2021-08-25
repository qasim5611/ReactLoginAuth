import React from 'react'
import { FcGlobe } from "react-icons/fc";

import './qasim.css';

const Sitehome = () => {
    return (
      <div>
        <br />
        <span className="span"> Welcome to Coding Trip</span>
        <h1 style={{ textAlign: "center", marginTop: "50px" }}>
          <FcGlobe
            className="ball"
            size={100}
            style={{ position: "relative", top: "40px", right: "24px" }}
          />
          <span style={{ fontFamily: "cursive" }}>
            {" "}
            to all of you at Home page of the Site
          </span>
        </h1>
      </div>
    );
}

export default Sitehome
