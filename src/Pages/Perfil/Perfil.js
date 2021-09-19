import React, { useEffect, useState } from "react";
import logo from "./imgPerfil/logo-blue-croped.gif";
import M from "materialize-css";
import { Link } from "react-router-dom";
import { Api } from "../../Api/Api";

document.addEventListener("DOMContentLoaded", function () {
  const elems = document.querySelectorAll(".sidenav");
  M.Sidenav.init(elems, {});
});

export default function Perfil() {
  const [perfil, setPerfil] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const response = await Api.buildApiGetRequest(Api.readAlllPerfil(), true);
      const bodyResult = await response.json();
      setPerfil(bodyResult);
    };
    loadData();
  }, []);

  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">
            <img src={logo} alt="Logo Blue" width="150" />
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link className="waves-effect waves-light btn" to="/addPerfil">
                Cadastrar Perfil
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="row">
        <div className="col s12 m7">
          {perfil.map((p, i) => {
            return (
              <div className="card" key={i}>
                <div className="card-image">
                  <img src={p.imagemUrl} alt={p.titulo} />
                  <span className="card-title">Card Title</span>
                </div>
                <div className="card-action">
                  <Link to="/perfilSeleciuonado">Selecionar</Link>
              
                  <Link to={`/editPerfil/${p.id}`}>Editar</Link>
                  {console.log(p.id)}
                  <Link to="/perfilSeleciuonado">Remover</Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
