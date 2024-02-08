import '../../styles/banner.scss'; 

function Banner({ image, children }) {
  return (
    <div className="banner_container" style={{ backgroundImage: `url(${image})` }}>
      <h1 className="banner_text">{children}</h1>
    </div>
  );
}

export default Banner;
