import React from 'react';
import Banner from '../../components/Banner'; 
import ImageBannerAbout from "../../assets/image_banner_about.jpeg";
import '../../styles/about.scss';

function About() {
  return (
    <div className="about-page">
      <Banner image={ImageBannerAbout} />
      <div>
        <ul>
          <li><strong>Fiabilité</strong></li>
          <li><strong>Respect</strong></li>
          <li><strong>Service</strong></li>
          <li><strong>Sécurité</strong></li>
        </ul>
      </div>
    </div>
  );
}

export default About;
