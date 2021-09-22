import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import GuardedRoute from "./components/GuardedRoute/GuardedRoute";
import Perfil from "./Pages/Perfil/Perfil";
import AddPerfil from "./Pages/Perfil/AddPerfil";
import EditPerfil from "./Pages/Perfil/EditPerfil";
import AddUsuarios from "./Pages/Usuarios/AddUsuarios";

// import CarouselContent from "./components/CarouselContent/CarouselContent";
// import M from "materialize-css"; iniciazao dos componentes no materialize

function App() {
  const isAuthenticate = Boolean(localStorage.getItem("JWT"));
  //auth={isAuthenticate}

  return (
    <div className="App">
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/perfil" exact component={Perfil} />
        <Route path="/" exact component={Home} />
        <Route path="/addUsuario" exact component={AddUsuarios} />
        <Route path="/addPerfil" exact component={AddPerfil} />
        <Route path="/editPerfil/:id" exact component={EditPerfil} />
      </Switch>
    </div>
  );
}

export default App;
