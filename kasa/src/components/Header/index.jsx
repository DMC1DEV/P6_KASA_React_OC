import { Link } from "react-router-dom";
import LogoRouge from "../../assets/logo_kasa_rouge.png";

function Header() {
  return (
    <nav>
      <img
        src={LogoRouge}
        alt="Logo de l'application dans le header en rouge."
      />
      <Link to="/">Accueil</Link>
      <Link to="/About">A Propos</Link>
    </nav>
  );
}

export default Header;
