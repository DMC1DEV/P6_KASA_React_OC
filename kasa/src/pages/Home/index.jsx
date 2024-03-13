import React from 'react';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import apartmentsData from '../../data/json P6.json';
import '../../styles/main.scss';
import ImageBannerHomepage from "../../assets/image_banner_homepage.jpeg";

function Home() {
  return (
    
    <main className="all-content">
      <Banner image={ImageBannerHomepage}>
        Chez vous, partout et ailleurs
      </Banner>

      <div className="apartments-grid">
        {apartmentsData.map((apartment) => (
          <Card
            key={apartment.id}
            id={apartment.id}
            title={apartment.title}
            image={apartment.cover} 
          />
        ))}
      </div>
    </main>
  );
}

export default Home;
