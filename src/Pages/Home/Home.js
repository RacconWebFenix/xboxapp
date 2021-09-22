import React from "react";
import "../Home/home.css";
import M from "materialize-css";
import bg1Home from "./imgHome/bg1Home.jpg";
import bg2Home from "./imgHome/bg2Home.jpg";
import bg3Home from "./imgHome/bg3Home.jpg";
import { Link } from "react-router-dom";

document.addEventListener("DOMContentLoaded", function () {
  const elems = document.querySelectorAll(".carousel");
  M.Carousel.init(elems, {
    fullWidth: true,
    indicators: true,
    duration: 1000,
  });
});

export default function Home() {
  return (
    <div>
      <div className="homeTitleContainer">
        <div className="homeTitle">
          <h1>X-BOX Live Web Edition</h1>
        </div>
      </div>

      <div className="carousel carousel-slider center">
        <div className="carousel-fixed-item center">
          <div className="homeBtns">
            <Link
              className="btn waves-effect green darken-4 white-text darken-text-2"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="btn waves-effect green darken-4 white-text darken-text-2"
              to="/addUsuario"
            >
              Cadastro
            </Link>
          </div>
        </div>
        <img className="carousel-item" src={bg3Home} alt="Imagem 3 Home" />
        <img className="carousel-item" src={bg1Home} alt="Imagem 1 Home" />
        <img className="carousel-item" src={bg2Home} alt="Imagem 2 Home" />
      </div>
    </div>
  );
}
