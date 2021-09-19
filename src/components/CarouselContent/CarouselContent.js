import React from "react";
import M from "materialize-css";
import CardGame from "../CardGame/CardGame";
import "../CarouselContent/carouselContent.css";

document.addEventListener("DOMContentLoaded", function () {
  const elems = document.querySelectorAll(".carousel");
  M.Carousel.init(elems, {});
});

export default function CarouselContent() {
  return (
    <div>
      <div className="carousel">
        <a className="carousel-item" href="#one!">
          <CardGame />
        </a>
        <a className="carousel-item" href="#two!">
          <CardGame />
        </a>
        <a className="carousel-item" href="#three!">
          <CardGame />
        </a>
        <a className="carousel-item" href="#four!">
          <CardGame />
        </a>
        <a className="carousel-item" href="#five!">
          <CardGame />
        </a>
      </div>
    </div>
  );
}
