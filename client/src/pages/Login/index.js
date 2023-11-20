import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import arrowImg from "../../assets/arrow.svg";
import { auth } from "../../services/firebaseConfig";

import "./login.css";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  // Verifica o login ao carregar a página
  useEffect(() => {
    const sessionCookie = localStorage.getItem('session');
    if (sessionCookie) {
      // Faça a verificação do cookie e defina o estado do usuário se estiver autenticado
    }
  }, []);

  function handleSignIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(email, password).then(() => {
      // Redirecione após o login bem-sucedido
      navigate("/");
    });
  }

  function handleSignOut() {
    // Remova o cookie e limpe o localStorage
    localStorage.removeItem('session');
    signOut(auth)
      .then(() => {
        // O usuário foi desconectado com sucesso.
        // Você pode adicionar redirecionamento ou outras ações aqui.
        console.log("Usuário desconectado com sucesso.");
      })
      .catch((error) => {
        console.error("Erro ao realizar o logout:", error);
      });
  }

  return (
    <>
      <div className="cont">
        <h2>Por favor, digite suas informações de login</h2>
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
          {user ? (
            <button className="button" onClick={handleSignOut}>
              Desconectar
            </button>
          ) : (
            <>
              <button className="button" onClick={handleSignIn}>
                Entrar <img src={arrowImg} alt="->" />
              </button>
              <div className="footer">
                <p>Você não tem uma conta?</p>
                <Link to="/register">Crie a sua conta aqui</Link>
              </div>
              <Link className="voltar" to="/">
                Voltar para o início
              </Link>
            </>
          )}
        </form>
      </div>
    </>
  );
}
