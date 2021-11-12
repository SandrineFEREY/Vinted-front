import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Link to="/signup">S'inscrire</Link>
      <Link to="/login">Se connecter</Link>
    </>
  );
};

export default Header;
