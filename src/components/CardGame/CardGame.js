import React from "react";
import "../CardGame/cardGame.css";
import Button from "@mui/material/Button";
import Stars from "../utils/Stars/Stars";

export default function CardGame() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-image">
          <img
            src="https://store-images.s-microsoft.com/image/apps.9688.70804610839547354.8da93c46-fd13-4b16-8ebe-e8e02c53d93e.09c2e91e-28bd-4f6f-bfd6-79d6b241667a"
            alt="Mortal Kombat"
          />

          <span className="card-title">Mortal Kombat 11</span>
        </div>
        <div className="card-content">
          <div className="nota">
            Ano: 2021 Nota: <Stars value={8} id="stars" />
          </div>
        </div>
        <div className="card-action">
          <Button variant="contained" color="primary">
            Adicionar Favorito
          </Button>
        </div>
      </div>
    </div>
  );
}
