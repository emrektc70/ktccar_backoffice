import styles from "./styles.module.scss";
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
    <div className={styles.content}>
      <div className={styles.fullWidth}>
        <div className={styles.logo} onClick={navigateHome}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.categorieBox}>
          <div className={styles.categorie} onClick={navigateHome}>
            <div className={styles.row}>
              Accueil
            </div>
            <HomeOutlinedIcon />
          </div>
          <div className={styles.categorie} onClick={navigateEvent}>
            <div className={styles.row}>
              Actualité
            </div>
            <DateRangeOutlinedIcon />
          </div>
          <div className={styles.categorie} onClick={navigateChat}>
            <div className={styles.row}>
              Chat
            </div>
            <ChatBubbleOutlineOutlinedIcon />
          </div>
          <div className={styles.categorie} onClick={navigateProfil}>
            <div className={styles.row}>
              Profil
            </div>
            <AccountBoxOutlinedIcon />
          </div>
        </div>
      </div>

      <div className={styles.average}>
        <div className={styles.logo} onClick={navigateHome}>
          <img src={logo} alt="logo" width={156} height={156} />
        </div>
        <div className={styles.categorieBox}>
          <div className={styles.categorie} onClick={navigateHome}>
            <HomeOutlinedIcon />
          </div>
          <div className={styles.categorie} onClick={navigateEvent}>
            <DateRangeOutlinedIcon />
          </div>
          <div className={styles.categorie} onClick={navigateChat}>
            <ChatBubbleOutlineOutlinedIcon />
          </div>
          <div className={styles.categorie} onClick={navigateProfil}>
            <AccountBoxOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
export default View;
