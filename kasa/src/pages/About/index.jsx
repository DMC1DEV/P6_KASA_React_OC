import ImageBannerAbout from "../../assets/image_banner_about.jpeg";

function About() {
  return (
    <div>
            <img
        src={ImageBannerAbout}
        alt="Plage rocailleuse sous un ciel gris."
        style={{ maxWidth: "100%", height: "300px" }}
      />
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
