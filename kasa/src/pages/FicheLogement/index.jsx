import apartmentsData from '../../data/json P6.json';

function FicheLogementPage() {
  const apartment = apartmentsData[0];
  const title = apartment.title;
  const cover = apartment.cover;
  const location = apartment.location;
  const tags = apartment.tags;
  const description = apartment.description;
  const equipments = apartment.equipments;
  const rating = apartment.rating;
  const hostName = apartment.host.name;
  const hostPicture = apartment.host.picture;

  return (
    <div>
      <h1>{title}</h1>
      <img src={cover} alt="Cover" style={{maxWidth: "50%"}}/>
      <p>{location}</p>
      <p>{tags.join(', ')}</p>
      <p>{description}</p>
      <p>{equipments.join(', ')}</p>
      <p>{rating}</p>
      <p>{hostName}</p>
      <img src={hostPicture} alt="Host" />
    </div>
  );
}

export default FicheLogementPage;
