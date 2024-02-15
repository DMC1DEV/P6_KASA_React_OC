import React from 'react';
import { useParams } from 'react-router-dom';
import apartmentsData from '../../data/json P6.json'; // Assurez-vous que le chemin est correct
import Carousel from '../../components/Carousel'; // Assurez-vous que le chemin est correct
import Collapse from '../../components/Collapse'; // Assurez-vous que le chemin est correct
import '../../styles/fichelogement.scss'; // Assurez-vous que le chemin est correct

function FicheLogementPage() {
  const { id } = useParams();
  const apartment = apartmentsData.find(apartment => apartment.id === id);

  if (!apartment) {
    return <div>Appartement introuvable</div>;
  }

  const { title, location, tags, description, equipments, rating, host, pictures } = apartment;
  const starRating = Array.from({ length: 5 }, (_, index) => index < rating ? '★' : '☆').join(' ');

  return (
    <div className="fiche-logement">
      <Carousel pictures={pictures} />
      <div className="content-container">
        <h1 className="title">{title}</h1>
        <p className="location">{location}</p>
        <div className="tags">
          {tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
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
        <div className="rating">{starRating}</div>
        <div className="host-info">
          <img src={host.picture} alt="Host" className="host-picture" />
          <p className="host-name">{host.name}</p>
        </div>
      </div>
    </div>
  );
}

export default FicheLogementPage;
