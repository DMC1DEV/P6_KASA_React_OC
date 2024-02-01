import LogoBlanc from "../../assets/logo_kasa_blanc.png";
import '../../styles/main.scss';
import '../../styles/footer.scss';

function Footer() {
  return (
    <div className="footer">
      <div className="footer_logo">
        <img
          src={LogoBlanc}
          alt="Logo de l'application dans le footer en blanc."
        />
      </div>
      <div className="footer_informations_trademarks">
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
