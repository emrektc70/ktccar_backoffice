import styles from "./styles.module.scss";
import MenuBar from "../MenuBar/View";
import ChatBox from "../componentsktccar/chatBox/View";

type Props = {
  groupes: any[];
};
const View: React.FC<Props> = ({ groupes }) => {
  return (
    <div className={styles.chatBar}>
      <MenuBar />
      <div className={styles.chatPage}>
        <div className={styles.searchBar}>
          <input
            type="search"
            placeholder="Recherche "
            className={styles.search}
          />
          <div className={styles.title}>
            <h2> Groupe disponibles</h2>
          </div>

          <div className={styles.boxGroup}>
            <ChatBox groupes={groupes} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
