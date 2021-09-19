import React from "react";
import "./perfil.css"

export default function AddPerfil() {
  return (
    <div className="container addPerfil">
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input id="avatar" type="password" className="validate" />
              <label htmlFor="avatar">Imagem URL</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="titulo" type="text" className="validate" />
              <label htmlFor="titulo">Titulo</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input type="submit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
