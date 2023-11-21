import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import Cookies from "js-cookie";
import { auth } from "../../services/firebaseConfig";
import { Link } from "react-router-dom";

import "./login.css"; // Certifique-se de ter os estilos adequados

export function LogOut() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  function handleSignOut() {
    signOut(auth)
      .then(() => {
        Cookies.remove("user");
        console.log("Usuário desconectado com sucesso.");
        navigate("/login");
      })
      .catch((error) => {
        console.error("Erro ao realizar o logout:", error);
      });
  }

  return (
    <div>
      {user ? (
        <>
          <p>Bem-vindo à Estação Digital, {user.email}!</p>
          <button className="button" onClick={handleSignOut}>
            Desconectar
          </button>

          <Link className="voltar" to="/">
              Voltar para o início
            </Link>
        </>
      ) : (
        <>
          <p>Você não está autorizado a acessar esta página.</p>
          <p>Por favor, faça login primeiro.</p>
        </>
      )}
    </div>
  );
}
