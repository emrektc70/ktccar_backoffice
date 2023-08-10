import TitleComp from "../../TitleComp";
import styles from "./styles.module.scss";
import send from './assets/send.png'
import { Link } from "react-router-dom";

type Props = {};

const View: React.FC<Props> = () => {
  return (
    <div className={styles.influence}>
      <TitleComp title={"Je veux crée mon groupe"} />
      <div className={styles.content}>
        <div className={styles.description}>
          Êtes-vous un influenceur ou possédez-vous une communauté et souhaitez-vous créer un groupe pour vos fans ?
          <div className={styles.etape}>
            C'est très simple, voici les étapes :
          </div>
        </div>
        <div className={styles.circleBox}>
          <div className={styles.circle}>
            <div className={styles.contentBox}>
              <div className={styles.title}>
                Etape: 1
              </div>
              <div className={styles.context}>
                Nous envoyer un email
              </div>
            </div>
          </div>
          <div className={styles.circle}>
            <div className={styles.contentBox}>
              <div className={styles.title}>
                Etape: 2
              </div>
              <div className={styles.context}>
                Attendre une reponse de l'equipe
              </div>
            </div>
          </div>
          <div className={styles.circle}>
            <div className={styles.contentBox}>
              <div className={styles.title}>
                Etape: 3
              </div>
              <div className={styles.context}>
                Communiquez les informations nécessaires.
              </div>
            </div>
          </div>
          <div className={styles.circleSend}>
            <Link to={"mailto:motorsportfamily265@gmail.com"} style={{ textDecoration: 'none', color: '#fff' }}>
              <div className={styles.emailSend}>
                Envoyé le email
                <img src={send} width={16} height={16} className={styles.icon} alt="" />
              </div>
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
};

export default View;
