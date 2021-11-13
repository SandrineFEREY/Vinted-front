import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../Vinted.png";
import vinted from "../vinted-image.jpg";

const Header = ({ token, setUser }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="header">
        <img
          onClick={() => {
            navigate("/");
          }}
          className="logo"
          src={logo}
          alt="logo"
        />
        {token ? (
          <button
            className="sedeconnecter"
            onClick={() => {
              setUser(null);
              navigate("/");
            }}
          >
            Se déconnecter
          </button>
        ) : (
          <div className="block">
            <div>
              <div>
                <input type="text" placeholder="Recherche des articles" />
              </div>

              <div className="tri">
                <p>Trier par prix :</p>
                <input type="checkBox" />
                <p>Prix entre :</p>
                <input type="text" placeholder="10 E - 100 E" />
              </div>
            </div>

            <div className="link-inscription">
              <Link to="/signup">S'inscrire</Link>
            </div>
            <div className="link-connexion">
              <Link to="/login">Se connecter</Link>
            </div>
            <div className="link-vente">
              <Link to="/login">Vends tes articles</Link>
            </div>
          </div>
        )}
      </div>
      <div>
        <img className="imgHeader" src={vinted} alt="vinted" />
      </div>
    </div>
  );
};

export default Header;
