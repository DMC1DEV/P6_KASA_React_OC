import { Link } from "react-router-dom";
import '../../styles/errorpage.scss';

function Error404() {
  return (
    <main className="error-page">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link to="/" className="home-link">Retourner sur la page d’accueil</Link>
    </main>
  );
}

export default Error404;
