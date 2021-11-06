import React from "react";
import { Link } from "react-router-dom";
import "../Styles/EspecificPokemon.css";

const TargetEspecific = (props) => {
  const { pokemon, poderes } = props;
  var img =
    "https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg";
  return (
    <div className="container-especific">
      <div className="padre">
        <div className="row">
          <Link to="/pokemons">
            <img src={img} alt="Pokemons" />
          </Link>
          {pokemon.sprites ? (
            <div className="picture">
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
          ) : null}
          <div className="poderes1">
            <div className="col-sm">
              <h5>Weight</h5> {pokemon.weight} lb
            </div>
            <div className="col-sm">
              <h5>Height</h5> {pokemon.height} ft
            </div>
            <div className="col-sm">
              <h5>Experience</h5> {pokemon.base_experience} xp
            </div>
          </div>

          <div className="powers">
            <h5>Powers</h5>
          </div>
          <div className="poderes2">
            {poderes.map((p) => (
              <div className="col">
                <p key={p.ability.slot}>{p.ability.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TargetEspecific;
