import { useState, useEffect } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div class="connexion">
      <h2>Se connecter</h2>
      <form>
        <input type="email" placeholder="Email" value={email} />
        <input type="text" placeholder="Mot de passe" value={password} />
        <button>Se connecter</button>
      </form>
    </div>
  );
};

export default Login;
