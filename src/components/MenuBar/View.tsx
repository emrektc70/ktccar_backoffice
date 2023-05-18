import "./styles.scss";
import logo from "./assets//bleublanc1.png";
import { useNavigate } from "react-router-dom";
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';

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
      <div className="logo" onClick={navigateHome}>
        <img src={logo} alt="logo" />
      </div>

      <div className="categorie-box">
        <div className="categorie" onClick={navigateHome}>
          <div className="row">
            <HomeOutlinedIcon />
          </div>
          <div className="text">
            Accueil
          </div>
        </div>
        <div className="categorie" onClick={navigateEvent}>
          <div className="row">
            <DateRangeOutlinedIcon />
          </div>
          <div className="text">
            Actualité
          </div>
        </div>
        <div className="categorie" onClick={navigateChat}>
          <div className="row">
            <ChatBubbleOutlineOutlinedIcon />
          </div>
          Chat
        </div>
        <div className="categorie" onClick={navigateProfil}>
          <div className="row">
            <AccountBoxOutlinedIcon />
          </div>
          Profil
        </div>
      </div>
    </div>
  );
};
export default View;
