import React from 'react';
import ImageBannerHomepage from "../../assets/image_banner_homepage.jpeg";
import '../../styles/banner.scss'; 

function Banner() {
  return (
    <div className="banner_container" style={{ backgroundImage: `url(${ImageBannerHomepage})` }}>
      <h1 className="banner_text">Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;
