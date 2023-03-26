import "./styles.scss";
import logo from "./assets//bleublanc1.png";
import { useNavigate } from "react-router-dom";
import Separator from "../Separator/view";

const View = () => {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };
  const navigateEvent = () => {
    navigate("/événement");
  };
  const navigateChat = () => {
    navigate("/chat");
  };
  const navigateAbout = () => {
    navigate("/about");
  };
  const navigateProfil = () => {
    navigate("/profil");
  };

  return (
    <div className="content">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="categorie-box">
        <div className="categorie" onClick={navigateHome}>
          Accueil
        </div>

        <div className="categorie" onClick={navigateEvent}>
          Actualité
        </div>

        <div className="categorie" onClick={navigateChat}>
          Chat
        </div>

        <div className="categorie" onClick={navigateAbout}>
          Contacter-nous
        </div>
        <div className="profil" onClick={navigateProfil}>
          Profil
        </div>
      </div>
    </div>
  );
};
export default View;
