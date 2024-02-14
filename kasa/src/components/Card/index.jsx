import { Link } from 'react-router-dom';
import '../../styles/card.scss';

function Card({ id, title }) {
  return (
    <div className="card-container">
      <Link to={`/ficheLogement/${id}`} className="card">
        <h2 className="card-title">{title}</h2>
      </Link>
    </div>
  );
}


export default Card;
