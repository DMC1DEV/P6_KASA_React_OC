import { useParams } from 'react-router-dom';
import apartmentsData from '../../data/json P6.json';

function FicheLogementPage() {

  const { id } = useParams();
  const apartment = apartmentsData.find(apartment => apartment.id === id);

  if (!apartment) {
    return <div>Appartement introuvable</div>
  }

  const { title, cover, location, tags, description, equipments, rating, host } = apartment;

  return (
    <div>
      <h1>{title}</h1>
      <img src={cover} alt="Cover" style={{maxWidth: "50%"}}/>
      <p>{location}</p>
      <p>{tags.join(', ')}</p>
      <p>{description}</p>
      <p>{equipments.join(', ')}</p>
      <p>{rating}</p>
      <p>{host.name}</p>
      <img src={host.picture} alt="Host" />
    </div>
  );
}

export default FicheLogementPage;
