import styles from "./styles.module.scss";
import logo from "./assets//bleublanc1.png";
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import menu from './assets/menu.svg'


type Props = {
  handleOpenMenu: VoidFunction;
  navigateHome: VoidFunction;
  navigateEvent: VoidFunction;
  navigateChat: VoidFunction;
  navigateAbout: VoidFunction;
  navigateProfil: VoidFunction;
  isOpen: boolean;
};

const View: React.FC<Props> = ({
  handleOpenMenu,
  navigateHome,
  navigateEvent,
  navigateChat,
  navigateAbout,
  navigateProfil,
  isOpen
}) => {


  return (
    <div className={styles.menuContent}>
      <div className={styles.contentMenuPhone} >
        <div className={styles.burgerLogo}>
          <img src={logo} width={140} height={140} alt="" />
        </div>
        <div className={styles.menuBurger} onClick={handleOpenMenu}>
          <img src={menu} alt="Menu" width={40} height={40} />
        </div>
      </div>
      {
        isOpen &&
        <div className={styles.menuMobile}>
          <div className={styles.background} />
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
      }
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
    </div>
  );
};
export default View;
