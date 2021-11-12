import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = (token, setUser) => {
  const navigate = useNavigate();
  return (
    <div>
      {token ? (
        <button
          onClick={() => {
            setUser(null);
            navigate("/");
          }}
        >
          Se déconnecter
        </button>
      ) : (
        <>
          <Link to="/signup">S'inscrire</Link>
          <Link to="/login">Se connecter</Link>
        </>
      )}
    </div>
  );
};

export default Header;
