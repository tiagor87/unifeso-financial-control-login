import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div class="container">
      <div className="container__login">
        <img class="logo" src={logo} alt="Logo" />
        <input class="input" type="email" placeholder="Email" />
        <input class="input" type="password" placeholder="Senha" />
        <button class="button button--success" type="submit">
          Entrar
        </button>
        <a class="link" href="">
          Esqueceu sua senha?
        </a>
        <a class="link" href="">
          Deseja se cadastrar?
        </a>
      </div>
    </div>
  );
}

export default App;
