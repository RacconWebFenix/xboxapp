import React from "react";
import { Api } from "../../Api/Api";

export default function AddUsuarios(props) {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const nome = event.target.nome.value;
    const sobrenome = event.target.sobrenome.value;
    const email = event.target.email.value;
    const senha = event.target.senha.value;
    const imagemUrl = event.target.imagemUrl.value;
    const cpf = event.target.cpf.value;
    const admin = true;
    const payload = {
      nome,
      sobrenome,
      email,
      senha,
      imagemUrl,
      cpf,
      admin,
    };

    const response = await Api.buildApiPostRequest(
      Api.createUrlUsuarios(),
      payload
    );

    const bodyResult = await response.json()

    console.log(bodyResult);
    props.history.push("/login");
  };

  return (
    <div className="container">
      <div className="row">
        <form className="col s12" onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-field col s6">
              <input name="nome" id="nome" type="text" className="validate" />
              <label htmlFor="nome">Nome</label>
            </div>
            <div className="input-field col s6">
              <input
                name="sobrenome"
                id="sobrenome"
                type="text"
                className="validate"
              />
              <label htmlFor="sobrenome">Sobrenome</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                name="imagemUrl"
                id="imagemUrl"
                type="text"
                className="validate"
              />
              <label htmlFor="imagemUrl">Imagem URL</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                name="email"
                id="email"
                type="email"
                className="validate"
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                name="senha"
                id="senha"
                type="password"
                className="validate"
              />
              <label htmlFor="senha" >
                Password
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                name="cpf"
                id="cpf"
                type="text"
                maxLength="11"
                className="validate"
              />
              <label htmlFor="cpf">CPF</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                className="waves-effect green darken-4 white-text"
                type="submit"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
