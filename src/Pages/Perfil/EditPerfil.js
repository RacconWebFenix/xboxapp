import React, { useEffect, useState } from "react";
import { Api } from "../../Api/Api";

export default function EditPerfil(props) {
  const id = parseInt(props.match.params.id);

  const [perfil, setPerfil] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const response = await Api.buildApiGetRequest(Api.readOneUrlPerfil(id));
      const bodyResult = await response.json();
      setPerfil(bodyResult);
      setLoading(false);
    };
    loadData();
  }, [id]);

  if (loading) {
    return (
      <div>
        <h1>Carregando Perfil...</h1>
      </div>
    );
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const titulo = event.target.titulo.value;
    const imagemUrl = event.target.imagemUrl.value;
    console.log(titulo);
    console.log(imagemUrl);
    const dados = {
      titulo,
      imagemUrl,
      jogosIds: [],
      jogosDisconnectIds: [],
    };
    const resultado = await Api.buildApiPutRequest(
      Api.readOneUrlPerfil(id),
      dados
    );
    console.log(resultado);
    const jsonResultado = await resultado.json();
    console.log(jsonResultado);
    props.history.push("/perfil");
    //props.history.push(`/view/${jsonResultado.id}`);
  };

  return (
    <div>
      <div className="row">
        <div className="edit__title">Editar: {perfil.titulo}</div>
        <form className="col s12" onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="titulo"
                type="text"
                placeholder={perfil.titulo}
                defaultValue={perfil.titulo}
                className="validate"
              />
              <label htmlFor="titulo">Titulo</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="imagemUrl"
                type="text"
                placeholder={perfil.imagemUrl}
                defaultValue={perfil.imagemUrl}
                className="validate"
              />
              <label htmlFor="imagemUrl">Imagem URL</label>
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
