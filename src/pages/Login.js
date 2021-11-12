import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );
      setUser(response.data);
    } catch (error) {
      console.log(error.message);
      console.log(error.response);
      if (error.response.status === 401) {
        setErrorMessage("mauvais email et/ou mot de passe");
      }
    }
  };

  return (
    <div className="connexion">
      <form onSubmit={handleSubmit}>
        <input
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          placeholder="Email"
          value={email}
        />
        <input
          onChange={(event) => setPassword(event.target.value)}
          type="text"
          placeholder="Mot de passe"
          value={password}
        />
        <span style={{ color: "red" }}>{errorMessage}</span>
        <input type="submit" value={"Se connecter"} />
      </form>
    </div>
  );
};

export default Login;
