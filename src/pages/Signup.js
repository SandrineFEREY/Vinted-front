import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = ({ setUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        { username: name, email: email, password: password }
      );
      if (response.data.token) {
        setUser(response.data.token);
        navigate("/");
      }
    } catch (error) {
      console.log(error.response);
      console.log(error.message);
      if (error.response.status === 409) {
        setErrorMessage("Cet email a déjà un compte");
      }
    }
  };

  return (
    <div className="formulaire">
      <h2>S'inscrire</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(event) => {
            setName(event.target.value);
          }}
          type="text"
          placeholder="Nom d'utilisateur"
          value={name}
        />
        <input
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          type="email"
          placeholder="Email"
          value={email}
        />
        <input
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          type="text"
          placeholder="Mot de passe"
          value={password}
        />
        <input type="checkbox" />
        <p>S'inscrire à la newsletter</p>
        <br />
        <span style={{ color: "red" }}>{errorMessage} </span>
        <br />
        <input
          className="bouton-inscription"
          type="submit"
          value={"S'inscrire"}
        />
      </form>
    </div>
  );
};

export default Signup;
