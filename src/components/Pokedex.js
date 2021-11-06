import React, { useState, useEffect } from "react";
import "../Styles/Navbar.css";
import Loader from "./Loader";
import { Link } from "react-router-dom";

function Pokedex(props) {
  var img =
    "https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg";

  const { pokemons } = props;
  const [pokemones, setPokemones] = useState([]);
  const [searchPoke, setSearchPoke] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerDatos = async () => {
      const api = await fetch(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=988"
      );
      const pokes = await api.json();
      setPokemones(pokes.results);
      setTimeout(function () {
        setLoading(false);
      }, 3000);
    };
    obtenerDatos();
  }, []);

  const handleChange = (e) => {
    setSearchPoke(e.target.value);
  };

  return (
    <React.Fragment>
      <div className="App">
        <div className="container-header">
          <div className="img-poke-titulo">
            <Link to="/">
              <img
                className="img-pokemon"
                src={img}
                alt="Buscador de pokemones"
              />
            </Link>
          </div>

          <div className="container-input">
            <input
              placeholder="Busca un pokémon..."
              type="text"
              value={searchPoke}
              className="mt-3 input"
              aria-label="Large"
              onChange={handleChange}
            />
          </div>
        </div>
        {
          <div className="container-pokemons">
            {loading ? (
              <div className="loader">
                <Loader />
              </div>
            ) : (
              pokemons
                .filter((user) => {
                  if (searchPoke === "") {
                    return user;
                  } else if (
                    user.name
                      .toLowerCase()
                      .includes(searchPoke.toLocaleLowerCase())
                  ) {
                    return user;
                  }
                })
                .map((pokemon) => (
                  
                    
                    <Link to={`/pokemons/${pokemon.id}`}>
                      <div className="target" key={pokemon.id}>
                        <div className="container-header-target">
                          <div className="id">#{pokemon.id}</div>
                          <div className="pokemon-favorite">
                            &#10084;&#65039;
                          </div>
                        </div>

                        <img
                          className="img"
                          src={pokemon.sprites.front_default}
                          alt="pokemon"
                        />

                        <div className="card-name">
                          <h3 className="card-tittle">{pokemon.name}</h3>
                        </div>
                        <div className="card-type">
                          {pokemon.types.map((type, id) => {
                            return (
                              <p key={id} className="type">
                                {type.type.name}
                              </p>
                            );
                          })}
                        </div>
                      </div>
                    </Link>
                  
                ))
            )}
          </div>
        }
      </div>
    </React.Fragment>
  );
}

export default Pokedex;
