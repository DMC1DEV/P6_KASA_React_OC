import { Link } from "react-router-dom";
import Banner from '../../components/Banner';
import apartmentsData from '../../data/json P6.json';

function Home() {
  return (
    <div>
      <Banner />
      <h2>Liste des appartements</h2>
      <Link to="/ficheLogement">Appart</Link>
      {apartmentsData.map((apartment) => (
        <p key={apartment.id}>{apartment.title}</p>
      ))}
    </div>
  );
}

export default Home;
