import React from 'react';
import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';
import '../../styles/aboutpage.scss'; 
import ImageBannerAbout from "../../assets/image_banner_about.jpeg";

function About() {
  return (
    <main className="about-page" >
      <Banner image={ImageBannerAbout} />
      
      <div className='collapse-container'>
      <Collapse title="Fiabilité">
        <div>
          <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
        </div>
      </Collapse>

      <Collapse title="Respect">
        <div>
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </div>
      </Collapse>

      <Collapse title="Service">
        <div>
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </div>
      </Collapse>

      <Collapse title="Sécurité">
        <div>
          <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
        </div>
      </Collapse>
      </div>
    </main>
  );
}

export default About;
