import { Link } from 'react-router-dom';
import '../../styles/card.scss';

function Card({ id, title }) {
  return (
    <Link to={`/ficheLogement/${id}`} className="card-title">
      <div className="card">
        <h2>{title}</h2>
      </div>
    </Link>
  );
}

export default Card;
