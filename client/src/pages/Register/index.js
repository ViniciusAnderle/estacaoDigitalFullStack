import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { Login } from "../Login";
import { auth } from "../../services/firebaseConfig";
import arrowImg from "../../assets/arrow.svg";


import "./register.css";

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  function handleSignOut(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);
  }

  if (loading) {
    return <p>carregando...</p>;
  }    if (user) {
    return <Login/>
   
   }
  return (
    <div className="cont">
      <header className="">
        <h2>Por favor digite suas informações de cadastro</h2>
      </header>

      <form>
        <div className="inputcont">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="inputcont">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********************"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={handleSignOut} className="button">
          Cadastrar <img src={arrowImg} alt="->" />
        </button>
        <div className="footer">
          <p>Você já tem uma conta?</p>
          <Link to="/login">Acesse sua conta aqui</Link>
        </div>
        <Link  className="voltar" to="/">Voltar para o inicio      
        </Link>
      </form>
    </div>
  );
}
