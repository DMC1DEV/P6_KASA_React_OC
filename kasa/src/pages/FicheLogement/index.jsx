import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import apartmentsData from '../../data/json P6.json'; 
import Carousel from '../../components/Carousel'; 
import Collapse from '../../components/Collapse'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../../styles/fichelogement.scss'; 

function FicheLogementPage() {
  const { id } = useParams();
  const apartment = apartmentsData.find(apartment => apartment.id === id);

  if (!apartment) {
    return <Navigate to="/404" replace />;
  }

  const { title, location, tags, description, equipments, rating, host, pictures } = apartment;

function generateStarIcons(rating) {
  let stars = [];
  const fullStarsCount = Math.floor(rating); 
  const emptyStarsCount = 5 - fullStarsCount; 

  // Ajouter les étoiles pleines
  for (let i = 0; i < fullStarsCount; i++) {
    stars.push(<FontAwesomeIcon icon={faStar} color="#FFD700" className="custom-size" key={`full-${i}`} />);
  }

  // Ajouter les étoiles vides
  for (let i = 0; i < emptyStarsCount; i++) {
    stars.push(<FontAwesomeIcon icon={faStar} style={{ color: 'gray' }} className="custom-size" key={`empty-${i}`} />);
  }

  return stars;
}


  return (
    <div className="fiche-logement">
      <Carousel pictures={pictures} />
      <div className="content-container">
        <div className="info-container">
          <div className="title-location-tags">
            <h1 className="title">{title}</h1>
            <p className="location">{location}</p>
            <div className="tags">
              {tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
          <div className="host-rating">
            <div className="host-info">
              <img src={host.picture} alt="Host" className="host-picture" />
              <p className="host-name">{host.name}</p>
            </div>
            <div className="rating">{generateStarIcons(rating)}</div>
          </div>
        </div>
        <div className="description-equipments-container">
          <Collapse title="Description">
            <p className="description">{description}</p>
          </Collapse>
          <Collapse title="Équipements">
            <div className="equipments">
              {equipments.map(equipment => (
                <p key={equipment} className="equipment">{equipment}</p>
              ))}
            </div>
          </Collapse>
        </div>
      </div>
    </div>
  );
}

export default FicheLogementPage;
