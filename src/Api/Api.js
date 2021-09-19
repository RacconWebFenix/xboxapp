export const Api = {
  //Base Url APi

  baseUrl: "http://localhost:3000",

  //EndPoints

  //perfil
  readAlllPerfil: () => Api.baseUrl + "/perfis",
  readOneUrlPerfil: (id) => Api.baseUrl + `/perfis/${parseInt(id)}`,
  //Login

  loginUrl: () => Api.baseUrl + "/login",

  // Auth Header

  authHeader: {
    Authorization: "Bearer " + localStorage.getItem("JWT"),
  },

  // GET
  buildApiGetRequest: (url, auth) =>
    fetch(url, {
      method: "GET",
      headers: auth ? new Headers({ ...Api.authHeader }) : undefined,
    }),
  //pacth
  buildApiPutRequest: (url, body) => {
    return fetch(url, {
      method: "PATCH",
      headers: new Headers({
        "Content-type": "application/json",
      }),
      body: JSON.stringify(body),
    });
  },
  buildApiPostRequest: (url, body) =>
    fetch(url, {
      method: "POST",
      headers: new Headers({
        "Content-type": "application/json",
      }),
      body: JSON.stringify(body),
    }),
};
