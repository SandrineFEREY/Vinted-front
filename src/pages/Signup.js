import { useState, useEffect } from "react";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div class="formulaire">
      <h2>S'inscrire</h2>
      <form>
        <input type="text" placeholder="Nom d'utilisateur" value={name} />
        <input type="email" placeholder="Email" value={email} />
        <input type="text" placeholder="Mot de passe" value={password} />
        <input type="checkbox" />
        <p>S'inscrire à la newsletter</p>
        <button>S'inscrire</button>
      </form>
    </div>
  );
};

export default Signup;
