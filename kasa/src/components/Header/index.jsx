import { Link } from "react-router-dom";
import LogoRouge from "../../assets/logo_kasa_rouge.png";
import '../../styles/main.scss';
import '../../styles/header.scss';

function Header() {
  return (
    <nav className="header">
      <div className="header_logo">
        <img
          src={LogoRouge}
          alt="Logo de l'application dans le header en rouge."
        />
      </div>
      <div className="header_links">
        <Link to="/">Accueil</Link>
        <Link to="/About">A Propos</Link>
      </div>
    </nav>
  );
}

export default Header;
