import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../styles/card.scss';

function Card({ id, title, image }) {
  return (
    <div className="card-container">
      <Link to={`/ficheLogement/${id}`} className="card" style={{ backgroundImage: `url(${image})` }}>
      <div className="gradient-overlay"></div>
        <h2 className="card-title">{title}</h2>
      </Link>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
