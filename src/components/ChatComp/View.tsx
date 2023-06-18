import styles from "./styles.module.scss";
import MenuBar from "../MenuBar";
import ChatBox from "../componentsktccar/chatBox";
import { TextField } from "@material-ui/core";

type Props = {
  groupes: any[];
  postGroupeId: (id: number) => void;
};
const View: React.FC<Props> = ({ groupes, postGroupeId }) => {
  return (
    <div className={styles.chatBar}>
      <MenuBar />
      <div className={styles.chatPage}>
        <div className={styles.searchBar}>
          <TextField
            id="standard-basic"
            label="Recherche"
            variant="standard"
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
