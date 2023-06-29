import styles from "./styles.module.scss";
import MenuBar from "../MenuBar";
import ChatBox from "../componentsktccar/chatBox";
import { TextField } from "@material-ui/core";

type Props = {
  groupes: any[];
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  filteredGroupes: any[];
  searchValue: string
};

const View: React.FC<Props> = ({
  groupes,
  handleSearchChange,
  filteredGroupes,
  searchValue
}) => {
  return (
    <div className={styles.chatBar}>
      <MenuBar />
      <div className={styles.chatPage}>
        <div className={styles.searchBar}>
          <TextField
            label="Recherche"
            variant="standard"
            value={searchValue}
            onChange={handleSearchChange}
            className={styles.search}
          />
        </div>

        <div className={styles.title}>
          <h2> Groupe disponibles</h2>
        </div>

        <div className={styles.boxGroup}>
          <ChatBox groupes={filteredGroupes} />
        </div>
      </div>
    </div>
  );
};

export default View;

