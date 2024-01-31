import ImageBannerHomepage from "../../assets/image_banner_homepage.jpeg";

function Banner() {
  return (
    <div>
      <h1>Chez vous, partout et ailleurs</h1>
      <img
        src={ImageBannerHomepage}
        alt="Plage rocailleuse sous un ciel gris."
        style={{ maxWidth: "100%", height: "300px" }}
      />
    </div>
  );
}

export default Banner;
