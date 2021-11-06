import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Start.css";
export default function Start() {
  var img =
    "https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg";

  return (
    <React.Fragment>
      <div className="row3" id="container">
        <div className="sub-container">
          <div className="container-logo" >
              <img className="img" src={img} alt="Pokemons" />
          </div>

          <div className="container-button">
            <Link to="/pokemons">
              <button className="btn btn-success">
                {" "}
                Click to view Pokemons
              </button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
